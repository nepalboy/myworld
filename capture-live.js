import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    console.log('Navigating to live site...');
    await page.goto('https://www.nepaliboy.com', { waitUntil: 'networkidle0' });
    console.log('Waiting for additional 5 seconds...');
    await new Promise(r => setTimeout(r, 5000));
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'public/home-preview.png' });
    await browser.close();
    console.log('Screenshot saved to public/home-preview.png');
})();
