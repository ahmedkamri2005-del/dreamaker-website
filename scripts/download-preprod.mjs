import fs from 'fs';
import https from 'https';
import path from 'path';

const outDir = 'c:/Users/Younes/Desktop/dreamaker prod/public/services';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const images = [
    {
        url: "https://image.pollinations.ai/prompt/Cinematic%20film%20producer%20desk%20with%20budgets,%20schedules,%20and%20coffee,%20movie%20set%20background,%208k,%20hyperrealistic?width=1920&height=1080&nologo=true",
        dest: path.join(outDir, "preprod-budgeting.jpg")
    },
    {
        url: "https://image.pollinations.ai/prompt/Cinematic%20film%20crew%20scouting%20epic%20Moroccan%20desert%20and%20kasbah%20at%20sunset,%20hyperrealistic,%208k?width=1920&height=1080&nologo=true",
        dest: path.join(outDir, "preprod-scouting.jpg")
    },
    {
        url: "https://image.pollinations.ai/prompt/Official%20film%20permit%20documents%20on%20a%20table%20with%20a%20movie%20clapperboard,%20cinematic%20lighting,%208k?width=1920&height=1080&nologo=true",
        dest: path.join(outDir, "preprod-permits.jpg")
    },
    {
        url: "https://image.pollinations.ai/prompt/Cinematic%20movie%20production%20finance%20office%20with%20charts,%20calculator,%20and%20Moroccan%20tea,%208k?width=1920&height=1080&nologo=true",
        dest: path.join(outDir, "preprod-tax.jpg")
    }
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function run() {
    for (const img of images) {
        console.log("Downloading", img.dest);
        try {
            await download(img.url, img.dest);
            console.log("Success:", img.dest);
        } catch (e) {
            console.log("Error:", e);
        }
    }
}
run();
