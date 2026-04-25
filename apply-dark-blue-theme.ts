import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-\[#111827\]/g, 'bg-[#243B53]');
  content = content.replace(/bg-\[#0F172A\]/g, 'bg-[#0B1F3A]');
  content = content.replace(/bg-\[#1E293B\]/g, 'bg-[#1B2A41]');
  content = content.replace(/from-\[#1E293B\] to-\[#111827\]/g, 'from-[#1B2A41] to-[#243B53]');
  content = content.replace(/from-\[#111827\] to-\[#1E293B\]/g, 'from-[#243B53] to-[#1B2A41]');
  
  // Borders
  content = content.replace(/border-\[#374151\]/g, 'border-[#243B53]');
  
  // Text colors
  content = content.replace(/text-slate-100/g, 'text-indigo-100');
  // text-slate-400 is close to #94A3B8, so we can keep it or replace it with text-slate-400.
  
  // Backgrounds in AnimatedBackground
  content = content.replace(/rgba\(255, 255, 255, 0.05\)/g, 'rgba(224, 231, 255, 0.05)');

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
console.log('Appended dark blue theme classes');
