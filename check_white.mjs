import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({
  headless: true,
  executablePath: 'C:\\Users\\ASUS\\.cache\\puppeteer\\chrome\\win64-152.0.7977.42\\chrome-win64\\chrome.exe',
  args: ['--no-sandbox','--disable-setuid-sandbox','--disable-gpu']
});
const page = await browser.newPage();
const logs = [];
const errors = [];
page.on('console', msg => logs.push(`${msg.type()}: ${msg.text()}`));
page.on('pageerror', err => errors.push(`PAGEERROR: ${err.message}\n${err.stack}`));
page.on('requestfailed', req => logs.push(`REQUESTFAILED: ${req.url()} ${req.failure().errorText}`));
try {
  const resp = await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 10000 });
  console.log('GOTO status', resp.status());
  await new Promise(r => setTimeout(r, 3000));
  const content = await page.content();
  console.log('CONTENT LEN', content.length);
  console.log('CONTENT SNIPPET', content.substring(0,2000));
  // try to get #root innerHTML
  const rootHTML = await page.evaluate(() => document.getElementById('root')?.innerHTML?.substring(0,5000) || 'no root');
  console.log('ROOT HTML', rootHTML);
  // check vite error overlay
  const overlay = await page.evaluate(() => document.querySelector('vite-error-overlay')?.outerHTML?.substring(0,2000) || 'no overlay');
  console.log('OVERLAY', overlay);
} catch(e) {
  console.log('GOTO ERROR', e);
}
console.log('---LOGS---');
logs.forEach(l=>console.log(l));
console.log('---ERRORS---');
errors.forEach(e=>console.log(e));
await browser.close();
