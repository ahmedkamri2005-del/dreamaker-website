import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../public/services');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const images = [
    {
        file: 'pre-prod.jpg',
        url: 'https://image.pollinations.ai/prompt/cinematic-film-crew-scouting-moroccan-desert-sunset-8k?width=1920&height=1080&nologo=true',
    },
    {
        file: 'production.jpg',
        url: 'https://image.pollinations.ai/prompt/professional-arri-alexa-cinema-camera-movie-set-dramatic-studio-lighting-8k?width=1920&height=1080&nologo=true',
    },
    {
        file: 'logistics.jpg',
        url: 'https://image.pollinations.ai/prompt/cinematic-movie-basecamp-sahara-desert-tents-trucks-golden-hour-8k?width=1920&height=1080&nologo=true',
    },
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = (u) =>
            https.get(u, (res) => {
                if (res.statusCode === 301 || res.statusCode === 302) {
                    file.close();
                    return request(res.headers.location);
                }
                if (res.statusCode !== 200) {
                    file.close();
                    fs.unlink(dest, () => { });
                    return reject(new Error(`HTTP ${res.statusCode} for ${u}`));
                }
                res.pipe(file);
                file.on('finish', () => file.close(resolve));
            }).on('error', (err) => {
                fs.unlink(dest, () => { });
                reject(err);
            });
        request(url);
    });
}

for (const img of images) {
    const dest = path.join(outDir, img.file);
    console.log(`⬇  Downloading ${img.file}...`);
    try {
        await download(img.url, dest);
        const size = (fs.statSync(dest).size / 1024).toFixed(1);
        console.log(`✅  Saved ${img.file} (${size} KB)`);
    } catch (err) {
        console.error(`❌  Failed ${img.file}: ${err.message}`);
    }
}

console.log('\nDone! Images saved to public/services/');
