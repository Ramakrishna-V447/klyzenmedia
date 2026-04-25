import fs from 'fs';

let content = fs.readFileSync('src/pages/Pricing.tsx', 'utf-8');

content = content.replace(/hover: transition-all/g, 'transition-all');
content = content.replace(/"bg-brand-primary text-white border-2 border-black hover:bg-black hover:-translate-y-1 brutalist-shadow transition-all: bg-brand-secondary"/g, '"bg-[#FF4F00] text-white border-2 border-black hover:bg-black hover:-translate-y-1 flex justify-center items-center h-12 brutalist-shadow transition-all"');
content = content.replace(/"glass-card text-black hover:bg-white\/10"/g, '"bg-white text-black border-2 border-black hover:-translate-y-1 flex justify-center items-center h-12 hover:brutalist-shadow transition-all"');

fs.writeFileSync('src/pages/Pricing.tsx', content, 'utf-8');
console.log('Fixed Pricing.tsx');
