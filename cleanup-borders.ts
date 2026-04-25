import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/border-b border-black border-2/g, 'border-b border-indigo-50 backdrop-blur-md');
  content = content.replace(/border border-black border-2/g, 'border border-indigo-100');
  content = content.replace(/border-2 border-black/g, 'border border-indigo-100');
  content = content.replace(/border-2 border-indigo-100/g, 'border border-indigo-100');
  content = content.replace(/border-black border-2/g, 'border-indigo-100 border');
  
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

processDirectory('./src');
console.log('Final cleanup!');
