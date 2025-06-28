/**  AI-Snake-Blur content script  **/

/* ---------- constants ---------- */
const IMAGE_SIZE   = 224;   // MobileNet input
const MIN_IMG_PX   = 128;   // skip tiny icons
const THRESHOLD_MS = 5000;  // give fetch fallback max 5 s

const BLUR_WRAPPER = 'ai-blur-wrapper';
const BLUR_OVERLAY = 'ai-blur-overlay';
const LOG = (...a) => console.debug('[AI-Blur]', ...a);

/* ---------- inject CSS once ---------- */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .${BLUR_WRAPPER}{display:inline-block;position:relative;}
    .${BLUR_OVERLAY}{
      position:absolute;inset:0;
      backdrop-filter:blur(30px);
      background:rgba(0,0,0,.3);
      pointer-events:none;
    }`;
  (document.head || document.documentElement).appendChild(style);
  LOG('CSS injected');
})();
/* ---------- un-blur helper ---------- */
function unblurImage(img) {
  img.classList.add('ai-safe');   // CSS lifts the default blur
}

/* ---------- blur helper ---------- */
function blurImage(img) {
  if (img.dataset.aiBlurProcessed) return;
  const wrap = document.createElement('span');
  wrap.className = BLUR_WRAPPER;
  img.parentNode.insertBefore(wrap, img);
  wrap.appendChild(img);

  const overlay = document.createElement('div');
  overlay.className = BLUR_OVERLAY;
  wrap.appendChild(overlay);

  img.dataset.aiBlurProcessed = '1';
}

/* ---------- util ---------- */
const processedUrls = new Set();
const imgsBySrc = url => Array.from(document.images).filter(im => im.src === url);

/* ---------- pixel helpers ---------- */
function drawToCanvas(imgLike) {
  const c =
    typeof OffscreenCanvas !== 'undefined'
      ? new OffscreenCanvas(IMAGE_SIZE, IMAGE_SIZE)
      : (() => {
          const el = document.createElement('canvas');
          el.width = IMAGE_SIZE;
          el.height = IMAGE_SIZE;
          return el;
        })();
  const ctx = c.getContext('2d');
  ctx.drawImage(imgLike, 0, 0, IMAGE_SIZE, IMAGE_SIZE);
  return ctx.getImageData(0, 0, IMAGE_SIZE, IMAGE_SIZE);
}

async function fetchAndDecode(url) {
  // timeout helper
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), THRESHOLD_MS);

  try {
    const resp = await fetch(url, { mode: 'cors', signal: ctrl.signal });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const blob = await resp.blob();
    const objURL = URL.createObjectURL(blob);
    const img = new Image();
    img.src = objURL;
    await img.decode();
    URL.revokeObjectURL(objURL);
    return img;
  } finally {
    clearTimeout(timer);
  }
}

/* ---------- main classify by URL ---------- */
async function classifyUrl(url) {
  if (processedUrls.has(url)) return;
  processedUrls.add(url);

  let imgData;
  /* 1️⃣  try drawing an existing <img> if we have one */
  const domImg = imgsBySrc(url)[0];
  if (domImg) {
    try {
      imgData = drawToCanvas(domImg);
    } catch (e) {
      LOG('tainted DOM canvas, fallback to fetch', url);
    }
  }

  /* 2️⃣  CORS-safe fallback: fetch + objectURL */
  if (!imgData) {
    try {
      const fetchedImg = await fetchAndDecode(url);
      imgData = drawToCanvas(fetchedImg);
    } catch (err) {
      LOG('fetch fallback failed', url, err.message);
      return; // give up
    }
  }

  chrome.runtime.sendMessage({
    action: 'CLASSIFY_IMAGE',
    rawImageData: Array.from(imgData.data),
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    url
  });
  LOG('→ CLASSIFY_IMAGE', url);
}

/* ---------- decide whether to queue a DOM <img> ---------- */
function consider(img) {
  if (!img.complete) return;               // still loading
  if (Math.max(img.naturalWidth, img.naturalHeight) < MIN_IMG_PX) return;
  classifyUrl(img.src);
}

/* ---------- initial sweep ---------- */
document.querySelectorAll('img').forEach(consider);

/* ---------- IntersectionObserver for infinite scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) consider(e.target);
  });
}, { root: null, threshold: 0 });

document.querySelectorAll('img').forEach(img => io.observe(img));

/* ---------- MutationObserver: new nodes + src/srcset changes ---------- */
new MutationObserver(muts => {
  for (const m of muts) {
    /* new nodes */
    m.addedNodes.forEach(n => {
      if (n.tagName === 'IMG') {
        io.observe(n);
        consider(n);
      } else if (n.querySelectorAll) {
        n.querySelectorAll('img').forEach(img => {
          io.observe(img);
          consider(img);
        });
      }
    });
    /* src / srcset change on existing img */
    if (m.type === 'attributes' && m.target.tagName === 'IMG') {
      if (m.attributeName === 'src' || m.attributeName === 'srcset') {
        consider(m.target);
      }
    }
  }
}).observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['src', 'srcset']
});

// /* ---------- verdict listener ---------- */
// chrome.runtime.onMessage.addListener(msg => {
//   // if (msg.action !== 'BLUR_IF_SNAKE' || !msg.isSnake) return;
//   if (msg.action !== 'BLUR_IF_BLOCKLIST' || !msg.shouldBlur) return;
//   const targets = imgsBySrc(msg.url);
//   targets.forEach(blurImage);
//   LOG('BLURRED', targets.length, 'img(s)', msg.url);
// });

/* ---------- verdict listener ---------- */
chrome.runtime.onMessage.addListener(msg => {
  if (msg.action !== 'BLUR_IF_BLOCKLIST') return;
  const targets = imgsBySrc(msg.url);

  if (msg.shouldBlur) {               // 🚫  blocked ⇒ keep default blur + overlay
    targets.forEach(blurImage);       // adds heavy overlay once
    LOG('BLOCKED', targets.length, 'img(s)', msg.url);
  } else {                            // ✅  safe ⇒ remove default blur
    targets.forEach(unblurImage);
    LOG('SAFE', targets.length, 'img(s)', msg.url);
  }
});
