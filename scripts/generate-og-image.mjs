/**
 * generate-og-image.mjs
 * Renders the 1200x630 Open Graph share card and writes it to public/og-image.png.
 * Uses Puppeteer (already a devDependency) so no image tooling is required.
 *
 * Usage:  node scripts/generate-og-image.mjs
 */

import puppeteer from 'puppeteer'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT = path.join(ROOT, 'public', 'og-image.png')

const WIDTH = 1200
const HEIGHT = 630

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    background: #0B0B0B;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Georgia, 'Times New Roman', serif;
    color: #E4DEC9;
  }
  .card {
    width: 1040px;
    height: 560px;
    padding: 56px 64px;
    border: 1px solid rgba(184, 164, 120, 0.35);
    border-radius: 24px;
    background:
      radial-gradient(1200px 500px at 85% -10%, rgba(184, 164, 120, 0.16), transparent 60%),
      radial-gradient(900px 400px at -10% 110%, rgba(184, 164, 120, 0.10), transparent 55%),
      #101010;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .wordmark {
    font-size: 22px;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    color: #B8A478;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
  }
  .headline {
    font-size: 64px;
    line-height: 1.08;
    letter-spacing: -0.01em;
    max-width: 920px;
    font-weight: 400;
  }
  .headline em {
    font-style: italic;
    color: #B8A478;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer .domain {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(228, 222, 201, 0.55);
  }
  .footer .rule {
    width: 220px;
    height: 1px;
    background: rgba(184, 164, 120, 0.45);
  }
</style>
</head>
<body>
  <div class="card">
    <div class="wordmark">Single Core Labs</div>
    <h1 class="headline">Applied AI research.<br/>Enterprise AI <em>without the chaos.</em></h1>
    <div class="footer">
      <div class="rule"></div>
      <div class="domain">singlecorelabs.in</div>
    </div>
  </div>
</body>
</html>`

function findSystemChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean)
  return candidates.find((p) => existsSync(p))
}

async function launchBrowser() {
  const executablePath = findSystemChrome()
  if (executablePath) {
    return puppeteer.launch({
      headless: true,
      executablePath,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    })
  }
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  })
}

const browser = await launchBrowser()

try {
  const page = await browser.newPage()
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 })
  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.screenshot({ path: OUTPUT, type: 'png' })
  console.log(`[og-image] Wrote ${OUTPUT}`)
} finally {
  await browser.close()
}