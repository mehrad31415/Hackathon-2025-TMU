/**  AI-Snake-Blur content script  **/

/* ---------- constants ---------- */
const IMAGE_SIZE = 224; // MobileNet input
const MIN_IMG_PX = 128; // skip tiny icons
const THRESHOLD_MS = 5000; // give fetch fallback max 5 s

const BLUR_WRAPPER = 'ai-blur-wrapper';
const BLUR_OVERLAY = 'ai-blur-overlay';
const WARNING_OVERLAY = 'ai-warning-overlay';
const ALT_FLAG = 'aiBlurAlt'; // marks images blurred via alt-text
const LOG = (...a) => console.debug('[AI-Blur]', ...a);

/* ---------- ALT-text block-list ---------- */
let ALT_BLOCKLIST = [];
let blocklistReady = false;
const PENDING_IMGS = new Set(); // imgs seen before list ready

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
    loadAltBlocklist(); // when done it will reprocess via consider()
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
const imageCache = new Map(); // url -> { shouldBlur, classificationTag, timestamp }
const userUnblurredImages = new Set(); // urls that user manually unblurred

// Load user unblurred images from storage
chrome.storage.local.get(['userUnblurredImages'], function (result) {
  if (result.userUnblurredImages) {
    result.userUnblurredImages.forEach((url) => userUnblurredImages.add(url));
  }
});

/* ---------- find proper container for overlay ---------- */
function findOverlayContainer(img) {
  // First, try to find a parent anchor tag with href
  const anchor = img.closest('a[href]');
  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      LOG('Using anchor container:', anchor);
      return anchor;
    }
  }

  // Walk up the DOM tree to find an element with actual dimensions
  let element = img.parentElement;
  while (element && element !== document.body) {
    const rect = element.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      LOG('Using parent container:', element);
      return element;
    }
    element = element.parentElement;
  }

  // Fallback to img's parent if nothing else works
  LOG('Using img parent as fallback:', img.parentElement);
  return img.parentElement;
}

/* ---------- un-blur helper ---------- */
function unblurImage(img) {
  if (img.dataset[ALT_FLAG] === '1') return; // alt-blurred stays blurred
  img.classList.add('ai-safe'); // CSS lifts the default blur
  img.classList.remove('ai-blurred-img'); // Show the image
}

/* ---------- blur helper with warning ---------- */
function blurImage(img, classificationTag = 'sensitive content') {
  if (img.dataset.aiBlurProcessed) return;

  // Find the proper container
  const container = findOverlayContainer(img);
  if (!container) {
    LOG('No suitable container found for:', img.src);
    return;
  }

  // Ensure container can position absolutely
  const containerStyle = window.getComputedStyle(container);
  if (containerStyle.position === 'static') {
    container.style.position = 'relative';
  }

  // Hide the original image
  img.classList.add('ai-blurred-img');

  // Create overlay wrapper
  const overlayWrapper = document.createElement('div');
  overlayWrapper.className = BLUR_WRAPPER;
  overlayWrapper.dataset.aiImageUrl = img.src;

  // Create blur overlay
  const blurOverlay = document.createElement('div');
  blurOverlay.className = BLUR_OVERLAY;
  overlayWrapper.appendChild(blurOverlay);

  // Create warning overlay
  const warningOverlay = document.createElement('div');
  warningOverlay.className = WARNING_OVERLAY;
  warningOverlay.textContent = `Warning: image may contain ${classificationTag}`;
  overlayWrapper.appendChild(warningOverlay);

  // Add click handler to unblur
  overlayWrapper.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    unblurSpecificImage(img);
  });

  // Append overlay to container
  container.appendChild(overlayWrapper);

  img.dataset.aiBlurProcessed = '1';
  img.dataset.aiClassificationTag = classificationTag;
  img.dataset.aiOverlayContainer = container;

  LOG('Applied blur overlay to container:', container);
}

/* ---------- util ---------- */
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
  // Check if user manually unblurred this image
  if (userUnblurredImages.has(url)) {
    LOG('Image manually unblurred by user, skipping:', url);
    return;
  }

  // Check cache for existing result
  const cached = imageCache.get(url);
  if (cached) {
    LOG('Using cached result for:', url, cached);
    applyCachedResult(url, cached.shouldBlur, cached.classificationTag);
    return;
  }

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

/* ---------- apply cached result ---------- */
function applyCachedResult(url, shouldBlur, classificationTag) {
  const targets = imgsBySrc(url);

  if (shouldBlur) {
    targets.forEach((img) => blurImage(img, classificationTag));
    LOG('Applied cached BLUR result:', targets.length, 'img(s)', url);
  } else {
    targets.forEach(unblurImage);
    LOG('Applied cached SAFE result:', targets.length, 'img(s)', url);
  }
}

/* ---------- decide whether to queue a DOM <img> ---------- */
function consider(img) {
  if (!blocklistReady) {
    // wait until list is ready
    PENDING_IMGS.add(img);
    return;
  }
  if (!img.complete) return; // still loading
  if (Math.max(img.naturalWidth, img.naturalHeight) < MIN_IMG_PX) return;

  // Skip if user manually unblurred this image
  if (userUnblurredImages.has(img.src)) {
    LOG('Image manually unblurred by user, skipping:', img.src);
    return;
  }

  // Skip if already processed and safe
  if (img.classList.contains('ai-safe')) {
    LOG('Image already marked as safe, skipping:', img.src);
    return;
  }

  /* ALT-text / aria-label priority */
  const alt = (img.alt || img.getAttribute('aria-label') || '').toLowerCase();
  const hit = ALT_BLOCKLIST.find((w) => alt.includes(w));
  if (hit) {
    blurImage(img, `matched alt: ${hit}`);
    img.dataset[ALT_FLAG] = '1';
    return; // skip pixel classification
  }

  classifyUrl(img.src);
}

/* ---------- reprocess all images on page ---------- */
function reprocessAllImages() {
  LOG('Reprocessing all images on page');

  // Clear cache to force reprocessing
  imageCache.clear();

  // Remove all existing blur overlays
  document.querySelectorAll(`.${BLUR_WRAPPER}`).forEach((overlay) => {
    overlay.remove();
  });

  // Show all images and remove blur classes
  document.querySelectorAll('img.ai-blurred-img').forEach((img) => {
    img.classList.remove('ai-blurred-img');
  });

  // Remove all ai-safe classes
  document.querySelectorAll('img.ai-safe').forEach((img) => {
    img.classList.remove('ai-safe');
  });

  // Clear processing data
  document.querySelectorAll('img[data-ai-blur-processed]').forEach((img) => {
    delete img.dataset.aiBlurProcessed;
    delete img.dataset.aiClassificationTag;
    delete img.dataset.aiOverlayContainer;
    delete img.dataset[ALT_FLAG];
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
    /* src / srcset / alt / aria-label change on existing img */
    if (m.type === 'attributes' && m.target.tagName === 'IMG') {
      if (['src', 'srcset', 'alt', 'aria-label'].includes(m.attributeName)) {
        consider(m.target);
      }
    }
  }
}).observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['src', 'srcset', 'alt', 'aria-label'],
});

/* ---------- verdict listener ---------- */
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'BLUR_IF_BLOCKLIST') {
    const { url, shouldBlur, classificationTag } = msg;

    // Cache the result
    imageCache.set(url, {
      shouldBlur,
      classificationTag: classificationTag || 'sensitive content',
      timestamp: Date.now(),
    });

    // Apply the result
    applyCachedResult(url, shouldBlur, classificationTag);
  } else if (msg.action === 'REPROCESS_IMAGES') {
    // Reprocess all images when settings are updated
    reprocessAllImages();
  }
});

/* ---------- unblur specific image ---------- */
function unblurSpecificImage(img) {
  // Remove the overlay
  const overlay = document.querySelector(`[data-ai-image-url="${img.src}"]`);
  if (overlay) {
    overlay.remove();
  }

  // Show the image
  img.classList.remove('ai-blurred-img');

  // Remove processing data
  delete img.dataset.aiBlurProcessed;
  delete img.dataset.aiClassificationTag;
  delete img.dataset.aiOverlayContainer;
  delete img.dataset[ALT_FLAG]; // Remove ALT_FLAG so it can be unblurred

  // Mark as safe
  img.classList.add('ai-safe');

  // Add to user unblurred images and save to storage
  userUnblurredImages.add(img.src);
  chrome.storage.local.set({
    userUnblurredImages: Array.from(userUnblurredImages),
  });

  LOG('Manually unblurred image:', img.src);
}
