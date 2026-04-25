import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-\[#0A0A0B\]/g, 'bg-[#0F172A]');
  content = content.replace(/bg-\[#1F1F23\]/g, 'bg-white');
  content = content.replace(/bg-\[#27272A\]/g, 'bg-gray-100'); // replacing intermediate dark grays
  
  // Gradients
  content = content.replace(/from-\[#141416\] to-\[#1F1F23\]/g, 'from-[#1E3A8A] to-[#1D4ED8]');
  content = content.replace(/from-\[#1F1F23\] to-\[#141416\]/g, 'from-[#1D4ED8] to-[#1E3A8A]');
  
  // Borders
  content = content.replace(/border-\[#27272A\]/g, 'border-black/10');
  content = content.replace(/border-white\/5/g, 'border-black/5');
  
  // Text colors - instead of literal colors, let's use inherit for main text, and opacity for muted text
  // This allows the CSS `color` from body and .glass-card to cascade appropriately!
  content = content.replace(/text-\[#F4F4F5\]/g, 'text-inherit');
  content = content.replace(/text-[#A1A1AA]/g, 'text-inherit opacity-70');
  content = content.replace(/text-slate-100/g, 'text-inherit');
  content = content.replace(/text-gray-900/g, 'text-inherit');
  content = content.replace(/text-slate-400/g, 'text-inherit opacity-70');
  
  // Custom button text colors if any were forced
  content = content.replace(/text-\[#0A0A0B\]/g, 'text-black');
  
  // AnimatedBackground specific overlays
  content = content.replace(/rgba\(255, 255, 255, 0.03\)/g, 'rgba(255, 255, 255, 0.05)');
  
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
console.log('Appended dark blue palette to TSX files');
