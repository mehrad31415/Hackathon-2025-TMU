/*  service-worker with verbose logging (ES-module)  */
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const IMAGE_SIZE = 224;
const TOPK       = 3;
const THRESHOLD  = 0.01;
const RETRY_MS   = 3000;
const LOG = (...a) => console.info('[AI-Blur][SW]', ...a);

const BLOCKLIST = [
  'snake',          // keep “snake” if you still care
  'spider',         // …add as many words or phrases as you like
  'frog',
  'gun',            // ← example: blur weapons
  'blood'
].map(w => w.toLowerCase());

class SnakeClassifier {
  constructor() {
    this.model = null;
    this.load();
  }

  async load() {
    LOG('loading MobileNet...');
    const t0 = performance.now();
    this.model = await mobilenet.load({ version: 2, alpha: 1.0 });
    await this.model.classify(tf.zeros([IMAGE_SIZE, IMAGE_SIZE, 3]));
    LOG(`model ready in ${(performance.now()-t0).toFixed(0)} ms`);
  }

  async classify(imgData, url, tabId) {
    if (!this.model) {
      setTimeout(() => this.classify(imgData, url, tabId), RETRY_MS);
      return;
    }
    LOG('classify', url);
    const t0 = performance.now();
    const preds = await this.model.classify(imgData, TOPK);
    const ms = (performance.now()-t0).toFixed(1);
    // const isSnake = preds.some(
    //   p => p.className.toLowerCase().includes('snake') && p.probability >= THRESHOLD
    // );
    const shouldBlur = preds.some(p =>
    BLOCKLIST.some(word =>
      p.className.toLowerCase().includes(word) && p.probability >= THRESHOLD  ));
    LOG(`preds (${ms} ms)`, preds.map(p=>`${p.className}:${p.probability.toFixed(2)}`));
    chrome.tabs.sendMessage(tabId, { action: 'BLUR_IF_BLOCKLIST', url, shouldBlur });
  }
}

const classifier = new SnakeClassifier();

/* receive pixel payloads */
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action !== 'CLASSIFY_IMAGE' || !sender.tab) return;
  const { rawImageData, width, height, url } = msg;
  const imgData = new ImageData(Uint8ClampedArray.from(rawImageData), width, height);
  classifier.classify(imgData, url, sender.tab.id);
});
