import fs from 'fs';
import path from 'path';

const config = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  
  --color-brand-primary: #FF4F00;
  --color-brand-secondary: #111111;
  --color-brand-accent: #FF4F00;
  --color-brand-highlight: #FF4F00;
}

body {
  background: #F4F4F0;
  color: #111111;
  font-family: var(--font-sans);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: #111111;
  letter-spacing: -0.04em;
}

.glass-card {
  background: #FFFFFF;
  border: 2px solid #111111;
  border-radius: 0 !important;
  box-shadow: 6px 6px 0px #111111;
  transition: all 0.2s ease;
}

.glass-card:hover {
  transform: translate(-2px, -2px) !important;
  box-shadow: 8px 8px 0px #111111 !important;
}

.text-gradient {
  color: var(--color-brand-primary);
  background: none;
  -webkit-text-fill-color: initial;
}

.brutalist-border {
  border: 2px solid #111111;
}

.brutalist-shadow {
  box-shadow: 6px 6px 0px #111111;
  border: 2px solid #111111;
}
`;

fs.writeFileSync('src/index.css', config, 'utf8');

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Strip out round corners and smooth shadows
  content = content.replace(/rounded-(sm|md|lg|xl|2xl|3xl|full)/g, 'rounded-none');
  content = content.replace(/shadow-(sm|md|lg|xl|2xl|inner)/g, '');
  content = content.replace(/shadow-brand-[a-z]+(\/\d+)?/g, '');
  
  // Replace text colors
  content = content.replace(/text-slate-[1-4]00/g, 'text-gray-600');
  content = content.replace(/text-slate-[5-9]00/g, 'text-black');
  
  // Buttons
  content = content.replace(/bg-brand-primary text-white[a-zA-Z0-9\-\ \/]*/g, 'bg-brand-primary text-white border-2 border-black hover:bg-black hover:-translate-y-1 brutalist-shadow transition-all');
  
  // Borders
  content = content.replace(/border-slate-[0-9]+/g, 'border-black border-2');
  content = content.replace(/bg-white\/[0-9]+/g, 'bg-white');
  content = content.replace(/backdrop-blur-[a-z]+/g, '');
  
  // Nav
  content = content.replace(/bg-slate-900\/50/g, 'bg-[#E5E5E0] border-b-2 border-black');
  content = content.replace(/bg-transparent/g, 'bg-transparent border-b-2 border-transparent transition-colors');
  content = content.replace(/text-slate-200/g, 'text-black font-semibold');
  
  // Hero text
  if (filePath.includes('Home.tsx')) {
      content = content.replace(/text-white drop-shadow-lg/g, 'text-black');
      content = content.replace(/bg-gradient-to-b from-white\/70 via-\[#F8FAFC\]\/80 to-white\/90/g, 'bg-transparent');
      content = content.replace(/<div className="fixed inset-0 pointer-events-none -z-10 bg-\[#F8FAFC\] overflow-hidden">[\s\S]*?<\/div>/, '<div className="fixed inset-0 pointer-events-none -z-10 bg-[#F4F4F0] overflow-hidden"></div>');
      content = content.replace(/from-transparent to-brand-primary\/5/g, 'bg-[#FF4F00] text-white border-y-2 border-black');
      content = content.replace(/text-slate-50/g, 'text-black');
  }

  if(filePath.includes('App.tsx')) {
      content = content.replace(/<div className="fixed inset-0 pointer-events-none -z-10 bg-\[#F8FAFC\] overflow-hidden">[\s\S]*?<\/div>/, '<div className="fixed inset-0 pointer-events-none -z-10 bg-[#F4F4F0] overflow-hidden"></div>');
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

processDirectory('./src');
console.log('Redesign complete!');
