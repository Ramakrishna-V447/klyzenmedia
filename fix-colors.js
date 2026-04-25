const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Text colors
  content = content.replace(/text-slate-50(?!0)/g, 'text-slate-900'); // avoid matching 500
  content = content.replace(/text-slate-100/g, 'text-slate-800');
  content = content.replace(/text-slate-300/g, 'text-slate-600');
  content = content.replace(/text-slate-400/g, 'text-slate-500');
  content = content.replace(/text-white drop-shadow-lg/g, 'text-slate-900');
  
  // Backgrounds & borders
  content = content.replace(/bg-slate-900\/40/g, 'bg-white/40');
  content = content.replace(/bg-slate-900\/50/g, 'bg-white/60');
  content = content.replace(/bg-slate-800\/50/g, 'bg-white/50');
  
  content = content.replace(/border-slate-700\/30/g, 'border-slate-200');
  content = content.replace(/border-slate-700\/40/g, 'border-slate-200');
  content = content.replace(/border-white\/5/g, 'border-slate-200');
  content = content.replace(/border-white\/10/g, 'border-slate-200');
  
  // Buttons that were made light for dark mode, revert to brand colored
  content = content.replace(/bg-slate-50 text-slate-900/g, 'bg-brand-primary text-white');
  content = content.replace(/bg-slate-50 hover:bg-white text-slate-900/g, 'bg-brand-primary hover:bg-brand-secondary text-white');
  
  // Other tweaks
  content = content.replace(/hover:shadow-\[0_0_20px_rgba\(255,255,255,0\.3\)\]/g, 'hover:shadow-brand-primary/20 hover:shadow-xl');
  content = content.replace(/hover:shadow-\[0_0_15px_rgba\(255,255,255,0\.2\)\]/g, 'hover:shadow-brand-primary/20 hover:shadow-md');
  
  // Navbar specific fixes
  if (filePath.includes('Navbar.tsx')) {
      content = content.replace(/text-white transition-colors/g, 'text-slate-900 transition-colors');
      // Logo text
      content = content.replace(/Klyzen<span className="text-brand-primary group-hover:text-slate-900 transition-colors"/g, 'Klyzen<span className="text-brand-primary group-hover:text-slate-900 transi');
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

function processDirectory(dir) {
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
console.log('Done!');
