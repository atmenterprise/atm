#!/usr/bin/env node
// Render an HTML one-pager to PNG at social media sizes using headless Chrome.
// Usage: node render.mjs <page.html> [--sizes portrait,square,landscape,link] [--out <dir>] [--scale 1]
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const presets = {
  portrait: [1080, 1350], // LinkedIn, Facebook, Instagram, Threads feeds
  square: [1080, 1080], // works everywhere
  landscape: [1200, 675], // X, Bluesky, Mastodon
  link: [1200, 627], // link preview / Open Graph cards
};

const args = process.argv.slice(2);
const input = args.find(arg => !arg.startsWith('--') && !args[args.indexOf(arg) - 1]?.startsWith('--'));
const option = name => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };
if (!input) {
  console.error('Usage: node render.mjs <page.html> [--sizes portrait,square,landscape,link] [--out <dir>] [--scale 1]');
  process.exit(1);
}

const page = resolve(input);
if (!existsSync(page)) { console.error(`Not found: ${page}`); process.exit(1); }
const outDir = resolve(option('out') ?? dirname(page));
const scale = Number(option('scale') ?? 1);
const sizes = (option('sizes') ?? 'portrait,square,landscape').split(',').map(s => s.trim()).filter(Boolean);
for (const size of sizes) {
  if (!presets[size] && !/^\d+x\d+$/.test(size)) { console.error(`Unknown size "${size}". Use ${Object.keys(presets).join(', ')} or WIDTHxHEIGHT.`); process.exit(1); }
}

const candidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean);
let chrome = candidates.find(path => existsSync(path));
if (!chrome) {
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'microsoft-edge']) {
    try { chrome = execFileSync('which', [name], { encoding: 'utf8' }).trim(); if (chrome) break; } catch {}
  }
}
if (!chrome) { console.error('Chrome, Chromium or Edge not found. Set CHROME_PATH.'); process.exit(1); }

mkdirSync(outDir, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), 'one-pager-chrome-'));
const stem = basename(page, extname(page));
try {
  for (const size of sizes) {
    const [width, height] = presets[size] ?? size.split('x').map(Number);
    const out = join(outDir, `${stem}-${size}.png`);
    execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
      `--user-data-dir=${profile}`,
      `--force-device-scale-factor=${scale}`,
      `--window-size=${width},${height}`,
      '--virtual-time-budget=4000', // let web fonts and images load
      `--screenshot=${out}`,
      pathToFileURL(page).href,
    ], { stdio: 'pipe' });
    if (!existsSync(out)) throw new Error(`Chrome did not write ${out}`);
    console.log(`${size.padEnd(9)} ${width * scale}×${height * scale}  ${out}`);
  }
} finally {
  rmSync(profile, { recursive: true, force: true });
}
