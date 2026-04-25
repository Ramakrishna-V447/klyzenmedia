import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Text colors
  content = content.replace(/text-gray-900/g, 'text-slate-100');
  content = content.replace(/text-gray-500/g, 'text-slate-400');
  content = content.replace(/text-slate-800/g, 'text-slate-100');
  content = content.replace(/text-slate-600/g, 'text-slate-400');
  
  // Backgrounds
  content = content.replace(/bg-white/g, 'bg-[#111827]');
  content = content.replace(/bg-slate-50/g, 'bg-[#0F172A]');
  
  // Borders
  content = content.replace(/border-slate-200/g, 'border-[#374151]');
  content = content.replace(/border-slate-100/g, 'border-[#374151]');
  
  // Buttons with brand primary (which will be yellow now) need dark text
  content = content.replace(/bg-brand-primary text-white/g, 'bg-brand-primary text-slate-900 font-bold');
  
  // Specific hovers
  content = content.replace(/hover:bg-brand-secondary/g, 'hover:bg-brand-primary/90');
  
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
console.log('Appended dark theme classes');
