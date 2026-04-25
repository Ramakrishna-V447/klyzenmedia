import fs from 'fs';

let content = fs.readFileSync('src/pages/Contact.tsx', 'utf-8');

content = content.replace(/border border-black border-2/g, 'border-2 border-black');
content = content.replace(/bg-white border-2 border-black rounded-none px-4 py-3 text-black focus:outline-none focus:border-brand-primary focus:bg-white focus: focus:-translate-y-0\.5 hover:border-black border-2   transition-all duration-300/g, 'bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:brutalist-shadow transition-all duration-200');
content = content.replace(/className="w-full py-4 rounded-none bg-brand-primary text-white border-2 border-black hover:bg-black hover:-translate-y-1 brutalist-shadow transition-all   transition-all flex items-center justify-center gap-2 group"/g, 'className="w-full py-4 bg-brand-primary text-white font-bold text-lg border-2 border-black hover:bg-black hover:-translate-y-1 brutalist-shadow transition-all flex items-center justify-center gap-2 group"');

fs.writeFileSync('src/pages/Contact.tsx', content, 'utf-8');
console.log('Fixed Contact.tsx');
