import fs from 'fs';
import path from 'path';

const file = 'c:/Users/Younes/Desktop/dreamaker prod/src/components/ContactSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Backgrounds
content = content.replace(/bg-\[#1a1a1a\]/g, 'bg-white');
content = content.replace(/bg-\[#151515\]/g, 'bg-white');

// Massive Background Watermark
content = content.replace(/text-white\/\[0\.02\]/g, 'text-black/[0.03]');

// Spotlight Background Effect
content = content.replace(/from-white\/\[0\.03\] via-\[#1a1a1a\] to-\[#1a1a1a\]/g, 'from-black/[0.03] via-white to-white');

// Text Colors
content = content.replace(/text-white\/70/g, 'text-gray-600');
content = content.replace(/text-white\/60/g, 'text-gray-600');
content = content.replace(/text-white\/50/g, 'text-gray-500');
content = content.replace(/text-white\/40/g, 'text-gray-500');
content = content.replace(/text-white\/30/g, 'text-gray-400');
content = content.replace(/text-white\/20/g, 'text-gray-300');
content = content.replace(/text-white(?![\/\w])/g, 'text-gray-900'); // matched text-white

// Borders
content = content.replace(/border-white\/5/g, 'border-gray-200');
content = content.replace(/border-white\/10/g, 'border-gray-200');
content = content.replace(/border-white\/20/g, 'border-gray-300');

// Input backgrounds
content = content.replace(/bg-white\/5/g, 'bg-gray-50');

// Modal specific stuff
content = content.replace(/bg-black\/80/g, 'bg-black/40'); // Keep modal overlay dark, maybe lighter
content = content.replace(/bg-white text-black/g, 'bg-gray-900 text-white'); // The two main buttons

fs.writeFileSync(file, content, 'utf8');
console.log('ContactSection updated.');
