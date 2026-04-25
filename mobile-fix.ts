import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Section padding adjustments (desktop-first -> responsive)
  content = content.replace(/className="py-24 /g, 'className="py-16 md:py-24 ');
  content = content.replace(/className="py-24"/g, 'className="py-16 md:py-24"');
  
  // Button sizing for mobile
  content = content.replace(/px-8 py-4/g, 'px-6 py-3 sm:px-8 sm:py-4');
  
  // Specific hero changes in Home.tsx
  if (filePath.includes('Home.tsx')) {
    content = content.replace(
      /text-5xl sm:text-6xl md:text-7xl lg:text-8xl/g, 
      'text-4xl sm:text-5xl md:text-7xl lg:text-8xl'
    );
    content = content.replace(
      /text-3xl md:text-5xl/g,
      'text-3xl sm:text-4xl md:text-5xl'
    );
  }

  // Pricing changes
  if (filePath.includes('Pricing.tsx')) {
    content = content.replace(
      /text-4xl font-bold text-slate-800 mb-2/g,
      'text-3xl sm:text-4xl font-bold text-slate-800 mb-2'
    );
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory('./src/pages');
console.log('Mobile optimizations applied');
