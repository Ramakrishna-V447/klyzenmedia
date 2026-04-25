import fs from 'fs';

function replaceInputs() {
  const filePath = './src/pages/Contact.tsx';
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/className="w-full bg-white border border-black\/10 px-4 py-3 text-inherit focus:outline-none focus:brutalist-shadow transition-all duration-200 rounded-xl"/g, 'className="w-full bg-gray-50 border border-black/10 px-4 py-3 text-inherit focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 rounded-xl"');
  fs.writeFileSync(filePath, content, 'utf-8');
}

replaceInputs();
console.log('Fixed inputs in Contact.tsx');
