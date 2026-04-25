import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Hero heading in Home.tsx
  content = content.replace(
    /text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl/g, 
    'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
  );

  // Section headings
  content = content.replace(
    /text-3xl sm:text-4xl md:text-5xl lg:text-6xl/g,
    'text-3xl sm:text-4xl md:text-5xl'
  );

  // Standard headings (Why Choose, We turn ideas into impact)
  content = content.replace(
    /text-3xl sm:text-4xl md:text-5xl/g,
    'text-3xl md:text-4xl lg:text-5xl'
  );

  // Re-run the above to fix any double match issues if they existed, but better to be precise.
  
  // Let's standardise section headings more effectively:
  content = content.replace(/text-3xl md:text-5xl/g, 'text-3xl md:text-4xl');
  content = content.replace(/text-3xl md:text-4xl lg:text-5xl/g, 'text-3xl md:text-4xl');

  // Contact page heading
  content = content.replace(
    /text-3xl sm:text-4xl md:text-5xl lg:text-6xl/g,
    'text-3xl md:text-4xl lg:text-5xl'
  );

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
console.log('Desktop optimizations applied');
