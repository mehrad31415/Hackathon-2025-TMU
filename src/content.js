/**  AI-Snake-Blur content script  **/

/* ---------- constants ---------- */
const IMAGE_SIZE = 224; // MobileNet input
const MIN_IMG_PX = 128; // skip tiny icons
const THRESHOLD_MS = 5000; // give fetch fallback max 5 s

const BLUR_WRAPPER = 'ai-blur-wrapper';
const BLUR_OVERLAY = 'ai-blur-overlay';
const WARNING_OVERLAY = 'ai-warning-overlay';
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
    }
    .${WARNING_OVERLAY}{
      position:absolute;
      top:8px;
      left:8px;
      max-width:calc(100% - 16px);
      background:rgba(255,255,255,0.9);
      color:#333;
      padding:8px 12px;
      border-radius:4px;
      font-size:11px;
      font-family:Arial,sans-serif;
      border:1px solid rgba(0,0,0,0.1);
      box-shadow:0 2px 4px rgba(0,0,0,0.1);
      pointer-events:none;
      z-index:1000;
      line-height:1.2;
      margin-right:8px;
      word-wrap:break-word;
    }
    .${BLUR_WRAPPER}:hover .${WARNING_OVERLAY}{
      background:rgba(255,255,255,0.95);
    }`;
  (document.head || document.documentElement).appendChild(style);
  LOG('CSS injected');
})();

/* ---------- un-blur helper ---------- */
function unblurImage(img) {
  img.classList.add('ai-safe'); // CSS lifts the default blur
}

/* ---------- blur helper with warning ---------- */
function blurImage(img, classificationTag = 'sensitive content') {
  if (img.dataset.aiBlurProcessed) return;

  const wrap = document.createElement('span');
  wrap.className = BLUR_WRAPPER;
  img.parentNode.insertBefore(wrap, img);
  wrap.appendChild(img);

  const overlay = document.createElement('div');
  overlay.className = BLUR_OVERLAY;
  wrap.appendChild(overlay);

  // Add warning overlay
  const warning = document.createElement('div');
  warning.className = WARNING_OVERLAY;
  warning.textContent = `Warning: image may contain ${classificationTag}`;
  wrap.appendChild(warning);

  img.dataset.aiBlurProcessed = '1';
  img.dataset.aiClassificationTag = classificationTag;
}

/* ---------- util ---------- */
const processedUrls = new Set();
const imgsBySrc = (url) =>
  Array.from(document.images).filter((im) => im.src === url);

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
    url,
  });
  LOG('→ CLASSIFY_IMAGE', url);
}

/* ---------- decide whether to queue a DOM <img> ---------- */
function consider(img) {
  if (!img.complete) return; // still loading
  if (Math.max(img.naturalWidth, img.naturalHeight) < MIN_IMG_PX) return;
  classifyUrl(img.src);
}

/* ---------- reprocess all images on page ---------- */
function reprocessAllImages() {
  LOG('Reprocessing all images on page');

  // Clear processed URLs cache to allow reprocessing
  processedUrls.clear();

  // Remove all existing blur wrappers and overlays
  document.querySelectorAll(`.${BLUR_WRAPPER}`).forEach((wrapper) => {
    const img = wrapper.querySelector('img');
    if (img) {
      wrapper.parentNode.insertBefore(img, wrapper);
      wrapper.remove();
      delete img.dataset.aiBlurProcessed;
      delete img.dataset.aiClassificationTag;
    }
  });

  // Remove all ai-safe classes
  document.querySelectorAll('img.ai-safe').forEach((img) => {
    img.classList.remove('ai-safe');
  });

  // Reprocess all images
  document.querySelectorAll('img').forEach(consider);
}

/* ---------- initial sweep ---------- */
document.querySelectorAll('img').forEach(consider);

/* ---------- IntersectionObserver for infinite scroll ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) consider(e.target);
    });
  },
  { root: null, threshold: 0 }
);

document.querySelectorAll('img').forEach((img) => io.observe(img));

/* ---------- MutationObserver: new nodes + src/srcset changes ---------- */
new MutationObserver((muts) => {
  for (const m of muts) {
    /* new nodes */
    m.addedNodes.forEach((n) => {
      if (n.tagName === 'IMG') {
        io.observe(n);
        consider(n);
      } else if (n.querySelectorAll) {
        n.querySelectorAll('img').forEach((img) => {
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
  attributeFilter: ['src', 'srcset'],
});

/* ---------- verdict listener ---------- */
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'BLUR_IF_BLOCKLIST') {
    const targets = imgsBySrc(msg.url);

    if (msg.shouldBlur) {
      // 🚫  blocked ⇒ keep default blur + overlay
      targets.forEach((img) =>
        blurImage(img, msg.classificationTag || 'sensitive content')
      );
      LOG(
        'BLOCKED',
        targets.length,
        'img(s)',
        msg.url,
        'Tag:',
        msg.classificationTag
      );
    } else {
      // ✅  safe ⇒ remove default blur
      targets.forEach(unblurImage);
      LOG('SAFE', targets.length, 'img(s)', msg.url);
    }
  } else if (msg.action === 'REPROCESS_IMAGES') {
    // Reprocess all images when settings are updated
    reprocessAllImages();
  }
});

/* ---------- context menu listener ---------- */
document.addEventListener('contextmenu', function (e) {
  // Check if right-clicked on a blurred image
  const blurredImg =
    e.target.closest(`.${BLUR_WRAPPER} img`) ||
    (e.target.tagName === 'IMG' && e.target.dataset.aiBlurProcessed);

  if (blurredImg) {
    e.preventDefault();

    // Create custom context menu
    const contextMenu = document.createElement('div');
    contextMenu.style.cssText = `
      position: fixed;
      top: ${e.clientY}px;
      left: ${e.clientX}px;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 10000;
      font-family: Arial, sans-serif;
      font-size: 12px;
      min-width: 150px;
    `;

    const menuItem = document.createElement('div');
    menuItem.style.cssText = `
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #eee;
      color: #000;
      font-weight: 500;
    `;
    menuItem.textContent = 'Unblur this image';
    menuItem.onmouseover = () => (menuItem.style.backgroundColor = '#f0f0f0');
    menuItem.onmouseout = () => (menuItem.style.backgroundColor = 'white');
    menuItem.onclick = () => {
      unblurSpecificImage(blurredImg);
      document.body.removeChild(contextMenu);
    };

    contextMenu.appendChild(menuItem);
    document.body.appendChild(contextMenu);

    // Remove context menu when clicking elsewhere
    const removeMenu = () => {
      if (document.body.contains(contextMenu)) {
        document.body.removeChild(contextMenu);
      }
      document.removeEventListener('click', removeMenu);
    };

    setTimeout(() => document.addEventListener('click', removeMenu), 0);
  }
});

/* ---------- unblur specific image ---------- */
function unblurSpecificImage(img) {
  const wrapper = img.closest(`.${BLUR_WRAPPER}`);
  if (wrapper) {
    // Move image back to original position
    wrapper.parentNode.insertBefore(img, wrapper);
    wrapper.remove();

    // Remove blur processing data
    delete img.dataset.aiBlurProcessed;
    delete img.dataset.aiClassificationTag;

    // Mark as safe
    img.classList.add('ai-safe');

    LOG('Manually unblurred image:', img.src);
  }
}
