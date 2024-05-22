const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

// Function to download and save an image
function downloadImage(url, filePath) {
    https.get(url, response => {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
    });
}

(async () => {
    // Launch Puppeteer and navigate to the product page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://in.urbanic.com/details/wide-leg-jeans-112452?vid=1');

    // Extracting the HTML content
    const html = await page.content();

    const productTitle = await page.$eval('.Title--title--FSHPbGu.urfont', element => element.textContent.trim());
    // Creating directory path for the product
    const productDirectory = path.join(__dirname, `dist/products/${productTitle}`);

    // Creating directory if it doesn't exist
    if (!fs.existsSync(productDirectory)) {
        fs.mkdirSync(productDirectory, { recursive: true });
    }

    // Writing HTML content to file
    const htmlFilePath = path.join(productDirectory, `${productTitle}.html`);
    fs.writeFileSync(htmlFilePath, html);

    console.log(`HTML saved for product: ${productTitle}`);

    // Extracting and saving product data
    const $ = cheerio.load(html);

    // Create 'colors' and 'images' directories if they don't exist
    const colorsDirectory = path.join(productDirectory, 'colors');
    const imagesDirectory = path.join(productDirectory, 'images');
    fs.mkdirSync(colorsDirectory, { recursive: true });
    fs.mkdirSync(imagesDirectory, { recursive: true });

    // Extract data based on class names
    const data = {
        title: $('.Title--title--FSHPbGu').text(),
        price: $('.Price--price--zwo8hKy').text(),
    };

    //Extract Colors Names
    const colors = await page.evaluate(() => {
        const colors = document.querySelectorAll('.ColorPalette--popupText--mAyhdov');
        const colorNames = Array.from(colors).map(color => color.textContent.trim());
        return colorNames;
    });

    // Extract images
    const images = $('.ub-image.Images_PC--image--Gp6XvuB').find('img');
    const imageUrls = [];
    images.each((index, element) => {
        const imageUrl = $(element).attr('src');
        imageUrls.push(imageUrl);

        // Download and save images
        const imageName = `${productTitle}_image_${index}.jpg`;
        const imagePath = path.resolve(imagesDirectory, imageName);
        downloadImage(imageUrl, imagePath);
    });

    // Extract color images
    const colorImages = $('.ColorPalette--colorPic--VQMSVvI .ub-image.ColorPalette--colorImage--ulXYIFv img');
    const colorImageUrls = [];
    colorImages.each((index, element) => {
        const colorImageUrl = $(element).attr('src');
        colorImageUrls.push(colorImageUrl);

        // Download and save color images
        const imageName = `${productTitle}_color_${index}.jpg`;
        const imagePath = path.resolve(colorsDirectory, imageName);
        downloadImage(colorImageUrl, imagePath);
    });


    // Extract Attributes
    const details = $('.AboutProduct--aboutProduct--ZoucCqC .AboutProduct--spec--gQh7j0L');

    // Extract text content of each detail
    const detailsObject = {};
    details.each((index, element) => {
        const text = $(element).text().trim();
        const [key, value] = text.split(':').map(item => item.trim()); // Splitting key and value
        detailsObject[key] = value;
    });

    const productData = {
        title: data.title,
        price: data.price,
        colors: colors,
        color_images: colorImageUrls,
        images: imageUrls,
        attributes: detailsObject,
    };
    console.log(productData)
    // Save product data as JSON
    const jsonFilePath = path.resolve(productDirectory, 'meta.json');
    fs.writeFileSync(jsonFilePath, JSON.stringify(productData, null, 2));
    console.log('Product data saved to meta.json');

    await browser.close();
})();





// const fs = require('fs');
// const https = require('https');
// const cheerio = require('cheerio');
// const path = require('path');

// const product = 'wide-leg-jeans-112452';
// const fileName = `${product}.html`;
// const fullPath = path.resolve(__dirname, `dist/products/${fileName}`);

// // Read the HTML file
// fs.readFile(fullPath, 'utf8', (err, html) => {
//     if (err) {
//         console.error('Error reading HTML file:', err);
//         return;
//     }

//     // Load HTML into Cheerio
//     const $ = cheerio.load(html);

//     // Extract data based on class names
//     const data = {
//         title: $('.Title--title--FSHPbGu').text(),
//         price: $('.Price--price--zwo8hKy').text(),
//         colors: $('.ColorPalette--colorContainer--Z99XIlJ .ColorPalette--popupText--mAyhdov').text(),
//     };

//     //Extract images
//     const images = $('.ub-image.Images_PC--image--Gp6XvuB').find('img');
//     const imageUrls = [];
//     images.each((index, element) => {
//         const imageUrl = $(element).attr('src');
//         imageUrls.push(imageUrl);
//     });

//     // // Extract src attribute of each image
//     const Colorimages = $('.ColorPalette--colorPic--VQMSVvI .ub-image.ColorPalette--colorImage--ulXYIFv img');
//     const ColorimageUrls = [];
//     Colorimages.each((index, element) => {
//         const ColorimageUrl = $(element).attr('src');
//         ColorimageUrls.push(ColorimageUrl);
//     });

//     // Create directory for images if it doesn't exist
//     const imagesDirectory = path.resolve(__dirname, 'dist/products/images');
//     if (!fs.existsSync(imagesDirectory)) {
//         fs.mkdirSync(imagesDirectory, { recursive: true });
//     }

//     // Function to download an image
//     const downloadImage = (url, imageName) => {
//         const imagePath = path.resolve(imagesDirectory, imageName);
//         const file = fs.createWriteStream(imagePath);
//         https.get(url, response => {
//             response.pipe(file);
//         });
//     };

//     // Download each color image
//     Colorimages.each((index, element) => {
//         const imageUrl = $(element).attr('src');
//         const imageName = `${product}_${data.colors}_${index}.jpg`; // Change the name as required
//         downloadImage(imageUrl, imageName);
//         console.log(`Downloaded ${imageName}`);
//     });

//     // Download each image
//     images.each((index, element) => {
//         const imageUrl = $(element).attr('src');
//         const imageName = `${product}_image_${index}.jpg`; // Change the name as required
//         downloadImage(imageUrl, imageName);
//         console.log(`Downloaded ${imageName}`);
//     });

//     // Extract text content of each detail
//     const details = $('.AboutProduct--aboutProduct--ZoucCqC .AboutProduct--spec--gQh7j0L');

//     // Extract text content of each detail
//     const detailsObject = {};
//     details.each((index, element) => {
//         const text = $(element).text().trim();
//         const [key, value] = text.split(':').map(item => item.trim()); // Splitting key and value
//         detailsObject[key] = value;
//     });

//     const productData = {
//         title: data.title,
//         price: data.price,
//         colors: data.colors,
//         color_images: ColorimageUrls,
//         images: imageUrls,
//         attributes: detailsObject,
//     };

//     fs.writeFile('productJson.json', JSON.stringify(productData), (err) => {
//         if (err) throw err;
//         console.log('Product data saved to productJson.json');
//     });
//     console.log(productData);
// });

