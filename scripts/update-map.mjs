import fs from 'fs';

const file = 'c:/Users/Younes/Desktop/dreamaker prod/src/components/ui/world-map.tsx';
let content = fs.readFileSync(file, 'utf8');

// World Map Backdrop opacity & brightness
content = content.replace(
    'className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-[0.08] filter grayscale brightness-150"',
    'className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-[0.15] brightness-0"'
);

// Arcs Opacity
content = content.replace(/strokeOpacity="0\.4"/g, 'strokeOpacity="0.8"');

// Marker Mask trick
content = content.replace(
    /<img\s+src="\/logowhite\.svg"\s+alt="Marker"\s+className="w-full h-full object-contain filter drop-shadow-sm"\s+\/>/g,
    `<div className="w-full h-full bg-[#4A90E2] drop-shadow-sm" style={{ WebkitMaskImage: 'url(/logowhite.svg)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: 'url(/logowhite.svg)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />`
);

// Modal container
content = content.replace(
    /border border-white\/10 bg-\[#1a1a1a\]\/95 backdrop-blur-3xl shadow-\[0_30px_90px_rgba\(0,0,0,0\.8\)\]/g,
    'border border-gray-200 bg-white/95 backdrop-blur-3xl shadow-xl'
);

// Text colors
content = content.replace(/text-white\/30/g, 'text-gray-400');
content = content.replace(/text-white\/40/g, 'text-gray-500');
content = content.replace(/text-white\/80/g, 'text-gray-600');
content = content.replace(/text-white text-xl/g, 'text-gray-900 text-xl');
content = content.replace(/text-white text-sm/g, 'text-gray-900 text-sm');

// Borders & backgrounds
content = content.replace(/border border-white\/5 bg-white\/5/g, 'border border-gray-200 bg-gray-50');
content = content.replace(/border-t border-white\/5/g, 'border-t border-gray-200');

fs.writeFileSync(file, content, 'utf8');
console.log('world-map.tsx updated successfully');
