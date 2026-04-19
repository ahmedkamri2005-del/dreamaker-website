import fs from 'fs';
import path from 'path';

const pages = [
    'pre-production',
    'production',
    'support-logistics'
];

pages.forEach(page => {
    const file = `c:/Users/Younes/Desktop/dreamaker prod/src/app/services/${page}/page.tsx`;
    let content = fs.readFileSync(file, 'utf8');

    // Change full main bg
    content = content.replace(/bg-\[#0e0e0e\]/g, 'bg-white');
    content = content.replace(/className="(.*?) text-white (.*?)"/g, 'className="$1 text-gray-900 $2"');

    // Hero text overrides - ensure hero text stays white
    // Look for text-5xl md:text-7xl font-bold tracking-tight text-white
    // The first replace will remove it from the hero title. Let's fix that.
    // Wait, let's reverse that. I will explicitly change main classes:
    content = content.replace(/<main className="min-h-screen bg-white text-gray-900/g, '<main className="min-h-screen bg-white text-gray-900'); // if it ran twice
    content = content.replace(/<main className="min-h-screen bg-\[#0e0e0e\] text-white/g, '<main className="min-h-screen bg-white text-gray-900');

    // Placeholder text paragraph
    content = content.replace(/text-white\/80/g, 'text-gray-600');

    // Service cards
    content = content.replace(/bg-\[#111111\]/g, 'bg-gray-50');
    content = content.replace(/border-white\/5/g, 'border-gray-200');
    content = content.replace(/text-white\/60/g, 'text-gray-500');

    // Footer area
    content = content.replace(/border-white\/10/g, 'border-gray-200');

    // Contact button
    content = content.replace(/bg-\[#4A90E2\] text-black/g, 'bg-[#4A90E2] text-white');
    content = content.replace(/hover:bg-white/g, 'hover:bg-gray-900');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${page} page.`);
});
