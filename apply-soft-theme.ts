import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-\[#243B53\]/g, 'bg-white');
  content = content.replace(/bg-\[#0B1F3A\]/g, 'bg-[#FAFAFA]');
  content = content.replace(/bg-\[#1B2A41\]/g, 'bg-white');
  content = content.replace(/from-\[#1B2A41\] to-\[#243B53\]/g, 'from-zinc-100 to-zinc-200');
  content = content.replace(/from-\[#243B53\] to-\[#1B2A41\]/g, 'from-zinc-200 to-zinc-100');
  
  // Borders
  content = content.replace(/border-\[#243B53\]/g, 'border-zinc-200');
  
  // Text colors
  content = content.replace(/text-indigo-100/g, 'text-zinc-900');
  content = content.replace(/text-slate-400/g, 'text-zinc-500');
  
  // Button text color
  // brand-primary is #18181B, so button text should be white
  content = content.replace(/text-slate-900 font-bold/g, 'text-white font-medium');
  content = content.replace(/text-slate-900/g, 'text-white');
  
  // Backgrounds in AnimatedBackground
  content = content.replace(/rgba\(224, 231, 255, 0.05\)/g, 'rgba(0, 0, 0, 0.05)');

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
console.log('Appended soft dark minimal theme classes');
