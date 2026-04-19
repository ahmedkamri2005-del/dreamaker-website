import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('c:/Users/Younes/Desktop/dreamaker prod/src', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('#D4AF37')) {
            content = content.replace(/#D4AF37/g, '#4A90E2');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Replaced Gold in:', filePath);
        }
    }
});
