
// const puppeteer = require('puppeteer');
// const path = require('path');
// const product = 'wide-leg-jeans-112452';
// const fileName = `${product}.html`;
// const fullPath = path.resolve(__dirname, `dist/products/${fileName}`);
// const fileURL = `file://${fullPath}`;
// console.log('file-path: ' + fileURL);

// (async () => {
//      const browser = await puppeteer.launch();
//      const page = await browser.newPage();

//      try {
//         await page.goto(fileURL, { waitUntil: 'networkidle0' });
//         console.log('page loaded');
//         const data = await page.evaluate(() => {
//             const data = {};
//             const titleElement = document.querySelector('.Title--title--FSHPbGu');
//             console.log(titleElement);
//             data.title = titleElement ? titleElement.innerText : null;
//             const priceElement = document.querySelector('.Price--price--zwo8hKy');
//             data.price = priceElement ? priceElement.innerText : null;
//             return data;
//         });
//         console.log(data)

//     } catch (error) {
//         console.error('Error navigating to product page:', error.message);
//     }

//     await browser.close();

// })();



const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to the webpage
    await page.goto('https://in.urbanic.com/details/wide-leg-jeans-112452?vid=1');

    // Wait for the modal trigger element to be visible and clickable
    await page.waitForSelector('[data-bee-click*="REVIEWS_STARS"]');

    // Click the element to trigger the modal
    await page.click('[data-bee-click*="REVIEWS_STARS"]');

    // Wait for the modal to appear
    await page.waitForSelector('.ant-modal.comment-list-modal');

    // Extract data from the modal
    const modalData = await page.evaluate(() => {
        // Use DOM manipulation or query selectors to extract the data
        const modalContent = document.querySelector('.ReviewCard--userName--MsNmQ0e');
        return modalContent.textContent.trim(); // Example: extracting text content
    });

    console.log(modalData);

    await browser.close();
})();
