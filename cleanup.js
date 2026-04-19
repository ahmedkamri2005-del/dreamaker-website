const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

// Find all .tsx, .ts files
const getAllFiles = (dir, fileArray = []) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, fileArray);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            fileArray.push(fullPath);
        }
    });
    return fileArray;
};

const allSrcFiles = getAllFiles(srcDir);
const usedImages = new Set();
const fileContents = {};
const altMap = {}; // Maps relative path to a semantic string for SEO

allSrcFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    fileContents[file] = content;

    // Find all image references
    const regex = /(?:"|')\/(images|material|logistic)\/([^"']+)(?:"|')/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const relPath = `/${match[1]}/${match[2]}`;
        usedImages.add(relPath);

        // Attempt to find alt text near this match to generate an SEO name
        const surroundingText = content.substring(Math.max(0, match.index - 100), Math.min(content.length, match.index + 200));
        const altMatch = surroundingText.match(/alt=["']([^"']+)["']/i);
        if (altMatch && altMatch[1] && !altMatch[1].includes('{')) {
            altMap[relPath] = altMatch[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }
    }
});

console.log(`Found ${usedImages.size} used images across the codebase.`);

// Create a mapping to rename them SEO friendly
const renameMap = {};
let counter = 1;
usedImages.forEach(img => {
    const ext = path.extname(img);
    const folder = img.split('/')[1];

    let seoName = altMap[img];
    if (!seoName || seoName.length < 3) {
        if (folder === 'material') seoName = `cinema-equipment-${counter}`;
        else if (folder === 'logistic') seoName = `morocco-set-logistics-${counter}`;
        else seoName = `dreamaker-production-${counter}`;
    } else {
        seoName = `dreamaker-${seoName}`;
    }

    let newRelPath = `/${folder}/${seoName}${ext}`;

    // Ensure uniqueness
    let dedupe = 1;
    while (Object.values(renameMap).includes(newRelPath)) {
        newRelPath = `/${folder}/${seoName}-${dedupe}${ext}`;
        dedupe++;
    }

    renameMap[img] = newRelPath;
    counter++;
});

// Rename in the filesystem
const folders = ['images', 'material', 'logistic'];
let deletedCount = 0;
let renamedCount = 0;

folders.forEach(folder => {
    const folderPath = path.join(publicDir, folder);
    if (!fs.existsSync(folderPath)) return;

    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        const relPath = `/${folder}/${file}`;
        const absPath = path.join(folderPath, file);

        if (!usedImages.has(relPath)) {
            // Unused - delete
            fs.unlinkSync(absPath);
            deletedCount++;
            console.log(`Deleted Unused Asset: ${relPath}`);
        } else {
            // Used - rename
            const newRelPath = renameMap[relPath];
            const newAbsPath = path.join(publicDir, newRelPath.substring(1)); // strip leading slash

            if (absPath !== newAbsPath) {
                fs.renameSync(absPath, newAbsPath);
            }
            renamedCount++;
            console.log(`Optimized: ${relPath} -> ${newRelPath}`);
        }
    });
});

// Now update all references in the source files
allSrcFiles.forEach(file => {
    let content = fileContents[file];
    let changed = false;
    usedImages.forEach(img => {
        const replacement = renameMap[img];
        if (img !== replacement && content.includes(img)) {
            content = content.split(img).join(replacement);
            changed = true;
        }
    });
    if (changed) {
        fs.writeFileSync(file, content);
    }
});

console.log(`\nSUCCESS: Deep Cleanup Completed! \n-> Deleted ${deletedCount} unused bloated files. \n-> Renamed & updated ${renamedCount} used images for SEO.`);
