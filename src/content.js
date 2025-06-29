/**  AI-Snake-Blur content script  **/

/* ---------- constants ---------- */
const IMAGE_SIZE = 224;          // MobileNet input
const MIN_IMG_PX = 128;          // skip tiny icons
const THRESHOLD_MS = 5000;       // give fetch fallback max 5 s

const BLUR_WRAPPER = 'ai-blur-wrapper';
const BLUR_OVERLAY = 'ai-blur-overlay';
const WARNING_OVERLAY = 'ai-warning-overlay';
const ALT_FLAG = 'aiBlurAlt';    // marks images blurred via alt-text
const LOG = (...a) => console.debug('[AI-Blur]', ...a);

/* ---------- ALT-text block-list ---------- */
let ALT_BLOCKLIST = [];
let blocklistReady = false;
const PENDING_IMGS = new Set();      // imgs seen before list ready

function loadAltBlocklist() {
  chrome.storage.sync.get(['blocklist'], (res) => {
    ALT_BLOCKLIST = (res.blocklist || []).map((w) => w.toLowerCase());
    blocklistReady = true;
    LOG('ALT block-list loaded:', ALT_BLOCKLIST);
    /* re-evaluate any images we queued while waiting */
    PENDING_IMGS.forEach(consider);
    PENDING_IMGS.clear();
  });
}
loadAltBlocklist();

/* reload on settings change */
chrome.runtime.onMessage.addListener((m) => {
  if (m.action === 'REPROCESS_IMAGES') {
    blocklistReady = false;
    loadAltBlocklist();   // when done it will reprocess via consider()
  }
});

/* ---------- inject CSS once ---------- */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .${BLUR_WRAPPER}{
      position:absolute;
      inset:0;
      cursor:pointer;
      z-index:10;
    }
    .${BLUR_WRAPPER}:hover .${WARNING_OVERLAY}{
      background:rgba(255,255,255,0.95);
    }
    .${BLUR_WRAPPER}:hover::after{
      content:"Click to unblur";
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      background:rgba(0,0,0,0.8);
      color:white;
      padding:8px 12px;
      border-radius:4px;
      font-size:12px;
      font-family:Arial,sans-serif;
      z-index:3;
      pointer-events:none;
      white-space:nowrap;
    }
    .${BLUR_OVERLAY}{
      position:absolute;inset:0;
      backdrop-filter:blur(30px);
      background:rgba(0,0,0,.3);
      pointer-events:none;
      z-index:1;
    }
    .${WARNING_OVERLAY}{
      position:absolute;
      top:8px;
      left:8px;
      background:rgba(255,255,255,0.9);
      color:#333;
      padding:8px 12px;
      border-radius:4px;
      font-size:11px;
      font-family:Arial,sans-serif;
      border:1px solid rgba(0,0,0,0.1);
      box-shadow:0 2px 4px rgba(0,0,0,0.1);
      pointer-events:none;
      z-index:2;
      line-height:1.2;
      margin-right:8px;
      word-wrap:break-word;
    }
    .ai-blurred-img{
      visibility:hidden !important;
    }`;
  (document.head || document.documentElement).appendChild(style);
  LOG('CSS injected');
})();

/* ---------- cache management ---------- */
const imageCache = new Map();  // url → { shouldBlur, classificationTag, timestamp }
const userUnblurredImages = new Set();
chrome.storage.local.get(['userUnblurredImages'], (res) => {
  (res.userUnblurredImages || []).forEach((u) => userUnblurredImages.add(u));
});

/* ---------- find proper container for overlay ---------- */
function findOverlayContainer(img) {
  const anchor = img.closest('a[href]');
  if (anchor && anchor.getBoundingClientRect().width) return anchor;

  let el = img.parentElement;
  while (el && el !== document.body) {
    if (el.getBoundingClientRect().width) return el;
    el = el.parentElement;
  }
  return img.parentElement;          // fallback
}

/* ---------- un-blur helper ---------- */
function unblurImage(img) {
  if (img.dataset[ALT_FLAG] === '1') return;   // alt-blurred stays blurred
  img.classList.add('ai-safe');
  img.classList.remove('ai-blurred-img');
}

/* ---------- blur helper with warning ---------- */
function blurImage(img, classificationTag = 'sensitive content') {
  if (img.dataset.aiBlurProcessed) return;

  const container = findOverlayContainer(img);
  if (!container) return;
  if (getComputedStyle(container).position === 'static')
    container.style.position = 'relative';

  img.classList.add('ai-blurred-img');

  const wrap = document.createElement('div');
  wrap.className = BLUR_WRAPPER;
  wrap.dataset.aiImageUrl = img.src;

  wrap.appendChild(Object.assign(document.createElement('div'), {
    className: BLUR_OVERLAY,
  }));
  wrap.appendChild(Object.assign(document.createElement('div'), {
    className: WARNING_OVERLAY,
    textContent: `Warning: image may contain ${classificationTag}`,
  }));
  wrap.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    unblurSpecificImage(img);
  });
  container.appendChild(wrap);

  img.dataset.aiBlurProcessed = '1';
  img.dataset.aiClassificationTag = classificationTag;
}

/* ---------- util ---------- */
const imgsBySrc = (url) =>
  Array.from(document.images).filter((im) => im.src === url);

/* ---------- pixel helpers ---------- */
function drawToCanvas(imgLike) {
  const c =
    typeof OffscreenCanvas !== 'undefined'
      ? new OffscreenCanvas(IMAGE_SIZE, IMAGE_SIZE)
      : Object.assign(document.createElement('canvas'), {
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
        });
  const ctx = c.getContext('2d');
  ctx.drawImage(imgLike, 0, 0, IMAGE_SIZE, IMAGE_SIZE);
  return ctx.getImageData(0, 0, IMAGE_SIZE, IMAGE_SIZE);
}
async function fetchAndDecode(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), THRESHOLD_MS);
  try {
    const r = await fetch(url, { mode: 'cors', signal: ctrl.signal });
    if (!r.ok) throw new Error();
    const blob = await r.blob();
    const obj = URL.createObjectURL(blob);
    const img = new Image();
    img.src = obj;
    await img.decode();
    URL.revokeObjectURL(obj);
    return img;
  } finally {
    clearTimeout(t);
  }
}

/* ---------- main classify by URL ---------- */
async function classifyUrl(url) {
  if (userUnblurredImages.has(url)) return;
  const cached = imageCache.get(url);
  if (cached) return applyCachedResult(url, cached.shouldBlur, cached.classificationTag);

  let imgData;
  const domImg = imgsBySrc(url)[0];
  try { imgData = drawToCanvas(domImg); } catch {}
  if (!imgData) {
    try { imgData = drawToCanvas(await fetchAndDecode(url)); }
    catch { return; }
  }

  chrome.runtime.sendMessage({
    action: 'CLASSIFY_IMAGE',
    rawImageData: Array.from(imgData.data),
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    url,
  });
}

/* ---------- apply cached result ---------- */
function applyCachedResult(url, shouldBlur, classificationTag) {
  const targets = imgsBySrc(url);
  (shouldBlur ? blurImage : unblurImage)(targets[0] || {}, classificationTag);
  targets.slice(1).forEach((img) =>
    shouldBlur ? blurImage(img, classificationTag) : unblurImage(img)
  );
}

/* ---------- decide whether to queue a DOM <img> ---------- */
function consider(img) {
  if (!blocklistReady) {    // wait until list is ready
    PENDING_IMGS.add(img);
    return;
  }
  if (!img.complete) return;
  if (Math.max(img.naturalWidth, img.naturalHeight) < MIN_IMG_PX) return;

  /* ALT-text / aria-label priority */
  const alt = (img.alt || img.getAttribute('aria-label') || '').toLowerCase();
  const hit = ALT_BLOCKLIST.find((w) => alt.includes(w));
  if (hit) {
    blurImage(img, `matched alt: ${hit}`);
    img.dataset[ALT_FLAG] = '1';
    return;                          // skip pixel classification
  }

  classifyUrl(img.src);
}

/* ---------- reprocess helper ---------- */
function reprocessAllImages() {
  imageCache.clear();
  document.querySelectorAll(`.${BLUR_WRAPPER}`).forEach((w) => w.remove());
  document.querySelectorAll('img').forEach((img) => {
    img.classList.remove('ai-blurred-img', 'ai-safe');
    delete img.dataset.aiBlurProcessed;
    delete img.dataset.aiClassificationTag;
    delete img.dataset[ALT_FLAG];
  });
  Array.from(document.images).forEach(consider);
}

/* ---------- initial sweep ---------- */
Array.from(document.images).forEach(consider);

/* ---------- observers ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && consider(e.target)),
  { root: null, threshold: 0 }
);
document.querySelectorAll('img').forEach((img) => io.observe(img));

new MutationObserver((muts) => {
  muts.forEach((m) => {
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
    if (
      m.type === 'attributes' &&
      m.target.tagName === 'IMG' &&
      ['src', 'srcset', 'alt', 'aria-label'].includes(m.attributeName)
    ) {
      consider(m.target);
    }
  });
}).observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['src', 'srcset', 'alt', 'aria-label'],
});

/* ---------- verdict listener ---------- */
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'BLUR_IF_BLOCKLIST') {
    imageCache.set(msg.url, {
      shouldBlur: msg.shouldBlur,
      classificationTag: msg.classificationTag || 'sensitive content',
      timestamp: Date.now(),
    });
    applyCachedResult(msg.url, msg.shouldBlur, msg.classificationTag);
  } else if (msg.action === 'REPROCESS_IMAGES') {
    reprocessAllImages();            // also reloads ALT block-list via listener
  }
});

/* ---------- unblur specific image ---------- */
function unblurSpecificImage(img) {
  const overlay = document.querySelector(
    `[data-ai-image-url=\"${img.src}\"]`
  );
  if (overlay) overlay.remove();

  img.classList.remove('ai-blurred-img');
  delete img.dataset.aiBlurProcessed;
  delete img.dataset.aiClassificationTag;
  delete img.dataset[ALT_FLAG];

  img.classList.add('ai-safe');
  userUnblurredImages.add(img.src);
  chrome.storage.local.set({
    userUnblurredImages: Array.from(userUnblurredImages),
  });
}
