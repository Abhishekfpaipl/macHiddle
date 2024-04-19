const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        // Fetch product data from the API
        const productsResponse = await axios.get('https://server.machiddle.com/api/products');

        // Check the status code of the response
        if (productsResponse.status !== 200) {
            throw new Error(`Failed to fetch products. Status code: ${productsResponse.status}`);
        }

        const responseData = productsResponse.data;

        // Extract the array of products from the response
        const products = responseData.data.data;

        // Check if products is an array
        if (!Array.isArray(products)) {
            console.error('Products data is not an array');
            process.exit(1);
        }

        // Define your Vue.js app URL
        const baseUrl = 'http://localhost:8081/';
        // const baseUrl = 'https://app.machiddle.com/';

        // Create 'dist' directory if it doesn't exist
        const distDirectory = path.join(__dirname, 'dist/products/');
        if (!fs.existsSync(distDirectory)) {
            fs.mkdirSync(distDirectory);
        }

        // Loop through each product
        // for (const product of products) {
        //     const sid = product.sid; // Assuming 'sid' is the product SID
        //     const route = `/product-page/${sid}`; // Construct the route using the product SID

        //     // Construct the full URL of the product page
        //     const url = baseUrl + route;

        //     // Navigate to the product page
        //     await page.goto(url, { waitUntil: 'networkidle0' });

        //     // Get HTML content
        //     const html = await page.content();

        //     // Write HTML file
        //     fs.writeFileSync(path.join(distDirectory, `${sid}.html`), html);

        //     // Create meta file
        //     const meta = {
        //         title: product.name, // Use product name as title
        //         description: product.description || '', // Use product description if available
        //         // Add other meta properties as needed
        //     };

        //     // Write meta file
        //     fs.writeFileSync(path.join(distDirectory, `${sid}.json`), JSON.stringify(meta, null, 2));
        // }

        // Your code before page navigation...

        // Loop through each product
        for (const product of products) {
            const sid = product.sid; // Assuming 'sid' is the product SID
            const route = `product-page/${sid}`; // Construct the route using the product SID

            // Construct the full URL of the product page
            const url = baseUrl + route;

            console.log('Navigating to:', url); // Log the URL before navigation

            try {
                // Navigate to the product page
                await page.goto(url, { waitUntil: 'networkidle0' });

                // Check if the page loaded successfully
                if (page.url() !== url) {
                    throw new Error(`Failed to navigate to ${url}. Current URL: ${page.url()}`);
                }

                // Get HTML content
                const html = await page.content();

                // Write HTML file
                fs.writeFileSync(path.join(distDirectory, `${sid}.html`), html);

                // Create meta file
                const meta = {
                    title: product.name, // Use product name as title
                    description: product.description || '', // Use product description if available
                    // Add other meta properties as needed
                };

                // Write meta file
                fs.writeFileSync(path.join(distDirectory, `${sid}.json`), JSON.stringify(meta, null, 2));
            } catch (error) {
                console.error('Error navigating to product page:', error.message);
                // You may choose to handle the error differently here, such as logging it and continuing to the next product
                continue; // Skip to the next product
            }
        }

        // Your code after page navigation...

        console.log('Products fetched and processed successfully.');

    } catch (error) {
        console.error('Error fetching or processing products:', error.message);
    } finally {
        await browser.close();
    }
})();
