/*  service-worker with verbose logging (ES-module)  */
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const IMAGE_SIZE = 224;
const TOPK = 3;
const THRESHOLD = 0.01;
const RETRY_MS = 3000;
const LOG = (...a) => console.info('[AI-Blur][SW]', ...a);

const GEMINI_API_KEY = 'AIzaSyBTCd3G6ruJ4KSg0zuwjSOOyY8jrFG3mWg';
const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

// Default blocklist (fallback) - use let instead of const
let INITIAL_BLOCKLIST_TERMS = [
  'snake', // keep "snake" if you still care
  'spider', // …add as many words or phrases as you like
  'frog',
  'gun', // ← example: blur weapons
  'blood',
].map((w) => w.toLowerCase());

// Load blocklist from storage
async function loadBlocklist() {
  try {
    const result = await chrome.storage.sync.get(['blocklist']);
    if (result.blocklist) {
      INITIAL_BLOCKLIST_TERMS = result.blocklist;
      LOG('Loaded blocklist from storage:', INITIAL_BLOCKLIST_TERMS);
    } else {
      LOG('Using default blocklist:', INITIAL_BLOCKLIST_TERMS);
    }
  } catch (error) {
    LOG('Error loading blocklist, using default:', error);
  }
}

// Load settings on startup
loadBlocklist();

let BLOCKLIST = []; // This will be populated dynamically

// Simple cache for expanded terms to avoid redundant API calls
const expandedTermsCache = new Map();

/**
 * Calls the Gemini API to get similar words for a given term.
 * @param {string} term The word to find similar terms for.
 * @returns {Promise<string[]>} An array of similar words.
 */
import { CLEANED_LABELS } from './cleaned-labels.js';

async function getSimilarWordsFromGemini(term) {
  if (expandedTermsCache.has(term)) {
    return expandedTermsCache.get(term);
  }

  const prompt = `
You are given a list of labeled concepts commonly found in image classification:
${CLEANED_LABELS.join(', ')}

Given the descriptor: "${term}", identify all relevant or conceptually similar items from the list above. 
These could be:
- synonyms or subtypes (e.g., "snake" → "cobra", "python")
- species that match the description (e.g., "dog-like" → "wolf", "fox", "husky")
- anything that would likely be grouped under the given descriptor by a human viewer.

Similar words should only be returned if "${term}" has the suffix -like.
Otherwise only return **exact matches from the list** above that relate to the term "${term}".
Respond with a comma-separated list of the matching cleaned labels, and nothing else.
`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      const generatedText = data.candidates[0].content.parts[0].text;
      const similarWords = generatedText
        .split(',')
        .map((word) => word.trim().toLowerCase())
        .filter((word) => word.length > 0);

      LOG(
        `Gemini returned relevant cleaned matches for "${term}":`,
        similarWords
      );
      expandedTermsCache.set(term, similarWords);
      return similarWords;
    }
  } catch (error) {
    LOG(`Error calling Gemini API for "${term}":`, error);
  }
  return [];
}

/**
 * Expands the initial blocklist with similar terms using the Gemini API.
 */
async function expandBlocklist() {
  LOG('Expanding blocklist using Gemini API...');
  const newBlocklist = new Set(
    INITIAL_BLOCKLIST_TERMS.map((w) => w.toLowerCase())
  ); // Start with initial terms

  for (const term of INITIAL_BLOCKLIST_TERMS) {
    const similarWords = await getSimilarWordsFromGemini(term);
    similarWords.forEach((word) => newBlocklist.add(word));
  }
  BLOCKLIST = Array.from(newBlocklist);
  LOG('Final expanded BLOCKLIST:', BLOCKLIST);
}

class SnakeClassifier {
  constructor() {
    this.model = null;
    this.load();
    expandBlocklist();
  }

  async load() {
    LOG('loading MobileNet...');
    const t0 = performance.now();
    this.model = await mobilenet.load({ version: 2, alpha: 1.0 });
    await this.model.classify(tf.zeros([IMAGE_SIZE, IMAGE_SIZE, 3]));
    LOG(`model ready in ${(performance.now() - t0).toFixed(0)} ms`);
  }

  async classify(imgData, url, tabId) {
    if (!this.model) {
      setTimeout(() => this.classify(imgData, url, tabId), RETRY_MS);
      return;
    }
    if (BLOCKLIST.length === 0 && INITIAL_BLOCKLIST_TERMS.length > 0) {
      // Check if expansion is still pending
      LOG('Blocklist not yet expanded, retrying classification...');
      setTimeout(() => this.classify(imgData, url, tabId), RETRY_MS);
      return;
    }
    LOG('classify', url);
    const t0 = performance.now();
    const preds = await this.model.classify(imgData, TOPK);
    const ms = (performance.now() - t0).toFixed(1);
    // const isSnake = preds.some(
    //   p => p.className.toLowerCase().includes('snake') && p.probability >= THRESHOLD
    // );
    const shouldBlur = preds.some((p) =>
      BLOCKLIST.some(
        (word) =>
          p.className.toLowerCase().includes(word) && p.probability >= THRESHOLD
      )
    );
    LOG(
      `preds (${ms} ms)`,
      preds.map((p) => `${p.className}:${p.probability.toFixed(2)}`)
    );
    chrome.tabs.sendMessage(tabId, {
      action: 'BLUR_IF_BLOCKLIST',
      url,
      shouldBlur,
    });
  }
}

const classifier = new SnakeClassifier();

/* receive pixel payloads */
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === 'CLASSIFY_IMAGE' && sender.tab) {
    const { rawImageData, width, height, url } = msg;
    const imgData = new ImageData(
      Uint8ClampedArray.from(rawImageData),
      width,
      height
    );
    classifier.classify(imgData, url, sender.tab.id);
  } else if (msg.action === 'RELOAD_SETTINGS') {
    // Reload blocklist and re-expand it when user saves new settings
    loadBlocklist().then(() => {
      LOG('Settings reloaded, expanding blocklist...');
      expandBlocklist().then(() => {
        LOG('Blocklist expanded, notifying all tabs to reprocess images');

        // Notify all active tabs to reprocess their images
        chrome.tabs.query({}, (tabs) => {
          tabs.forEach((tab) => {
            chrome.tabs
              .sendMessage(tab.id, { action: 'REPROCESS_IMAGES' })
              .catch(() => {
                // Ignore errors for tabs that don't have content scripts
              });
          });
        });
      });
    });
  }
});
