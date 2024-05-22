
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://in.urbanic.com/details/bow-detail-crop-cardigan-119561?vid=1');

    // Extracting links
    const links = await page.evaluate(() => {
        const anchors = document.querySelectorAll('a');
        const linksArray = [];
        anchors.forEach(anchor => {
            linksArray.push(anchor.href);
        });
        return linksArray;
    });

    console.log(links);

    await browser.close();
})();
