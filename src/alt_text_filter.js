// alt_text_filter.js – blur <img> if alt / aria-label matches blocklist

/* ---------- tiny helpers ---------- */
const BLUR_WRAPPER = 'ai-blur-wrapper';
const BLUR_OVERLAY = 'ai-blur-overlay';
const WARNING_OVERLAY = 'ai-warning-overlay';
const DATA_KEY = 'aiBlurAlt'; // dataset flag
const LOG = (...a) => console.debug('[AI-Blur-ALT]', ...a);

// at the top, add:
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function blurImgWithAlt(img, word) {
  if (img.dataset[DATA_KEY]) return; // already processed

    // Wrap in span and add overlay (same CSS classes as main script)
    const wrap = document.createElement('span');
    wrap.className = BLUR_WRAPPER;
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);

    const overlay = document.createElement('div');
    overlay.className = BLUR_OVERLAY;
    wrap.appendChild(overlay);

    const warn = document.createElement('div');
    warn.className = WARNING_OVERLAY;
    warn.textContent = `Warning: alt mentions "${word}"`;
    wrap.appendChild(warn);

    img.dataset[DATA_KEY] = '1';
}

/* ---------- main ---------- */
(() => {
    let currentBlocklist = [];

    // Load list once, then scan
    chrome.storage.sync.get(['blocklist'], (res) => {
        currentBlocklist = (res.blocklist || []).map((w) => w.toLowerCase());
        LOG('Reloaded blocklist:', currentBlocklist);
        scanAllImages(true); // force re-evaluate
      });
    }
  });

  /* ---------- scanning ---------- */
  function consider(img, force = false) {
    if (!img) return;
    if (!force && img.dataset[DATA_KEY]) return;

    const altText = (
      img.alt ||
      img.getAttribute('aria-label') ||
      ''
    ).toLowerCase();
    if (!altText) return;

    // find a block word as a whole word
    const hit = currentBlocklist.find((w) => {
      const re = new RegExp(`\\b${escapeRegExp(w)}\\b`, 'i');
      return re.test(altText);
    });

    console.log('[Alt Filter] Checking:', altText, '→ match:', hit);
    if (hit) blurImgWithAlt(img, hit);
  }

  function scanAllImages(force = false) {
    document.querySelectorAll('img').forEach((img) => consider(img, force));
  }

  /* ---------- observe DOM ---------- */
  new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === 'attributes' && m.attributeName === 'alt') {
        consider(m.target, true);
      }
      m.addedNodes.forEach((n) => {
        if (n.tagName === 'IMG') {
          consider(n);
        } else if (n.querySelectorAll) {
          n.querySelectorAll('img').forEach(consider);
        }
    });

    /* ---------- scanning ---------- */
    function consider(img, force = false) {
        if (!img) return;
        if (!force && img.dataset[DATA_KEY]) return;

        const altText =
            (img.alt || img.getAttribute('aria-label') || '').toLowerCase();
        if (!altText) return;

        // find a block word as a whole word
        const hit = currentBlocklist.find((w) => {
            const re = new RegExp(`\\b${escapeRegExp(w)}\\b`, 'i');
            return re.test(altText);
        });

        console.log('[Alt Filter] Checking:', altText, '→ match:', hit);
        if (hit) blurImgWithAlt(img, hit);
    }

    function scanAllImages(force = false) {
        document.querySelectorAll('img').forEach((img) => consider(img, force));
    }

    /* ---------- observe DOM ---------- */
    new MutationObserver((muts) => {
        for (const m of muts) {
            if (m.type === 'attributes' && m.attributeName === 'alt') {
                consider(m.target, true);
            }
            m.addedNodes.forEach((n) => {
                if (n.tagName === 'IMG') {
                    consider(n);
                } else if (n.querySelectorAll) {
                    n.querySelectorAll('img').forEach(consider);
                }
            });
        }
    }).observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['alt'],
    });
})();
