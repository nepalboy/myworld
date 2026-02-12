import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport to a standard desktop size
    await page.setViewport({ width: 1200, height: 630 }); // Open Graph recommended size

    console.log('Navigating to local server...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

    console.log('Waiting for 5 seconds to ensure render...');
    await new Promise(r => setTimeout(r, 5000));

    console.log('Taking screenshot...');
    await page.screenshot({ path: 'public/home-preview.png' });

    await browser.close();
    console.log('Screenshot saved to public/home-preview.png');
})();
