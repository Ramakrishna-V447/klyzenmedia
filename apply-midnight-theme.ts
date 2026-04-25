import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-white/g, 'bg-[#1F1F23]');
  content = content.replace(/bg-\[#FAFAFA\]/g, 'bg-[#0A0A0B]');
  content = content.replace(/from-zinc-100 to-zinc-200/g, 'from-[#141416] to-[#1F1F23]');
  content = content.replace(/from-zinc-200 to-zinc-100/g, 'from-[#1F1F23] to-[#141416]');
  content = content.replace(/bg-zinc-300/g, 'bg-[#27272A]');
  
  // Borders
  content = content.replace(/border-zinc-200/g, 'border-[#27272A]');
  content = content.replace(/border-slate-100/g, 'border-[#27272A]');
  
  // Text colors
  content = content.replace(/text-zinc-900/g, 'text-[#F4F4F5]');
  content = content.replace(/text-zinc-500/g, 'text-[#A1A1AA]');
  content = content.replace(/text-gray-900/g, 'text-[#F4F4F5]');
  content = content.replace(/text-gray-500/g, 'text-[#A1A1AA]');
  
  // Button text
  content = content.replace(/text-white font-medium/g, 'text-[#0A0A0B] font-bold');
  content = content.replace(/bg-brand-primary text-white/g, 'bg-brand-primary text-[#0A0A0B] font-bold');
  
  // AnimatedBackground specific
  content = content.replace(/rgba\(0, 0, 0, 0.05\)/g, 'rgba(255, 255, 255, 0.03)');

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
console.log('Appended midnight minimal theme classes');
