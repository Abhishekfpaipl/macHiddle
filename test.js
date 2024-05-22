const axios = require('axios');
const fs = require('fs');

async function fetchAndWriteSitemap() {
    try {
        const response = await axios.get('https://server.wsg-brand.in/api/sitemap');
        const { name, data } = response.data;

        let fileName = name; // sitemap_240430_3.xml
        const sitemapFilePath = `${fileName}.xml`;

        if (fs.existsSync(sitemapFilePath)) {
            console.log(`File ${sitemapFilePath} already exists. Skipping writing new sitemap data.`);
            return;
        }

        // Create the XML content for the sitemap
        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

        data.forEach(item => {
            xml += `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${formatDate(item.lastModified)}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
        });

        xml += `
</urlset>`;

        // Write the XML content to sitemap.xml file
        fs.writeFileSync(sitemapFilePath, xml);
        console.log(`Sitemap saved as ${sitemapFilePath}`);
    } catch (error) {
        console.error('Error fetching or writing sitemap:', error);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Call the function to fetch and write sitemap
fetchAndWriteSitemap();
.