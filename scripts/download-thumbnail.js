const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function fetchThumbnailUrl(siteUrl) {
  return new Promise((resolve, reject) => {
    const protocol = siteUrl.startsWith('https') ? https : http;
    
    protocol.get(siteUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Try to find og:image
        const ogImageMatch = data.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
        if (ogImageMatch && ogImageMatch[1]) {
          let imageUrl = ogImageMatch[1];
          if (imageUrl.startsWith('//')) {
            imageUrl = siteUrl.split('/')[0] + imageUrl;
          } else if (imageUrl.startsWith('/')) {
            const urlObj = new URL(siteUrl);
            imageUrl = urlObj.origin + imageUrl;
          }
          resolve(imageUrl);
          return;
        }
        
        // Try to find first large image
        const imgMatch = data.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (imgMatch && imgMatch[1]) {
          let imageUrl = imgMatch[1];
          if (imageUrl.startsWith('//')) {
            imageUrl = siteUrl.split('/')[0] + imageUrl;
          } else if (imageUrl.startsWith('/')) {
            const urlObj = new URL(siteUrl);
            imageUrl = urlObj.origin + imageUrl;
          }
          resolve(imageUrl);
          return;
        }
        
        reject(new Error('No image found'));
      });
    }).on('error', reject);
  });
}

async function main() {
  const siteUrl = process.argv[2] || 'https://cafemorden.vercel.app/';
  const outputPath = process.argv[3] || path.join(__dirname, '../public/cafe-morden-thumbnail.jpg');
  
  try {
    console.log(`Fetching thumbnail from ${siteUrl}...`);
    const imageUrl = await fetchThumbnailUrl(siteUrl);
    console.log(`Found image: ${imageUrl}`);
    console.log(`Downloading to ${outputPath}...`);
    
    // Ensure public directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    await downloadImage(imageUrl, outputPath);
    console.log('Download completed!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();



