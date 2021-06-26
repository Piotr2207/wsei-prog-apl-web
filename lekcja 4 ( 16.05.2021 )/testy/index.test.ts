import * as puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 130})
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');
    await page.screenshot({path: ''});
    await page.waitForSelector('');
    await page.type('','');
    await page.type('','');
    await page.waitFor(2000);
    await page.screenshot({path: ''});
    await browser.close();
})();