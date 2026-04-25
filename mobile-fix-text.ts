import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Paragraphs in Hero
content = content.replace(/text-lg md:text-xl/g, 'text-base sm:text-lg md:text-xl');

// Change CTA sections if needed. Let's look for huge text in contact.
content = content.replace(/text-lg text-slate-800 mb-12/g, 'text-base sm:text-lg text-slate-800 mb-12');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf-8');

let contactContent = fs.readFileSync('src/pages/Contact.tsx', 'utf-8');
contactContent = contactContent.replace(/text-lg text-slate-800 mb-12/g, 'text-base sm:text-lg text-slate-800 mb-12');
fs.writeFileSync('src/pages/Contact.tsx', contactContent, 'utf-8');
console.log('Mobile text tweaks applied');
