// build.cjs  –  zero-extra build
const esbuild = require('esbuild');
const fs      = require('fs');
const path    = require('path');

const DIST      = 'dist';
const DIST_SRC  = path.join(DIST, 'src');
const PUBLIC    = 'public';

// clean dist/
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST_SRC, { recursive: true });

// bundle ONLY the JS entry points (no CSS/HTML)
// sourcemap:false  → no *.map files
['service_worker.js', 'content.js', 'popup.js'].forEach(f =>
  esbuild.buildSync({
    entryPoints: [`src/${f}`],
    outfile:     `${DIST_SRC}/${f}`,
    bundle:      true,
    format:      'esm',
    sourcemap:   false,
    minify:      true,
    target:      ['es2020'],
  })
);

// copy static files verbatim
fs.copyFileSync('src/popup.html',        `${DIST_SRC}/popup.html`);
fs.copyFileSync('src/default_blur.css',  `${DIST_SRC}/default_blur.css`);
fs.copyFileSync(`${PUBLIC}/manifest.json`, `${DIST}/manifest.json`);

// copy images (if they exist)
const imgSrc = path.join(PUBLIC, 'images');
if (fs.existsSync(imgSrc)) {
  fs.cpSync(imgSrc, path.join(DIST, 'images'), { recursive: true });
}

console.log('✅ build complete – no extra files');
