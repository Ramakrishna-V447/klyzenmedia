import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // gradients to solid primary buttons
  content = content.replace(/bg-gradient-to-r from-indigo-500 .* text-white shadow-lg shadow-indigo-500\/25 hover:shadow-indigo-500\/40/g, 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40');
  content = content.replace(/bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500\/25 hover:shadow-indigo-500\/40/g, 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40');
  content = content.replace(/bg-gradient-to-r from-indigo-[^"]* text-white/g, 'bg-brand-primary text-white');
  
  content = content.replace(/bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-white border border-slate-200 hover:bg-brand-secondary hover:shadow-brand-primary\/25/g, 'bg-brand-primary text-white border border-brand-primary hover:bg-brand-secondary hover:shadow-brand-primary/25');
  content = content.replace(/bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-white border border-indigo-100/g, 'bg-brand-primary text-white border border-brand-primary');
  
  // indigo borders to slate borders
  content = content.replace(/border-indigo-100/g, 'border-slate-200');
  content = content.replace(/border-indigo-50/g, 'border-slate-100');
  
  // specific contact hover
  content = content.replace(/hover:bg-indigo-600 hover:shadow-indigo-500\/25/g, 'hover:bg-brand-secondary hover:shadow-brand-primary/25');
  
  // gradients in pricing and services
  content = content.replace(/from-indigo-500 to-pink-500/g, 'from-brand-primary to-brand-primary');

  // Background gradients inside AnimatedBackground
  content = content.replace(/bg-indigo-400/g, 'bg-brand-primary/40');
  content = content.replace(/from-indigo-200 to-purple-200/g, 'from-slate-200 to-slate-300');

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
console.log('Theme updated');
