import fs from 'fs';
import path from 'path';

const cssContent = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-display: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  
  --color-brand-primary: #6366F1; /* Indigo 500 */
  --color-brand-secondary: #EC4899; /* Pink 500 */
  --color-brand-accent: #06B6D4; /* Cyan 500 */
  --color-brand-highlight: #F59E0B; /* Amber 500 */
}

body {
  background: #F8FAFC;
  color: #0F172A;
  font-family: var(--font-sans);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: #0F172A;
  letter-spacing: -0.02em;
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.05);
  border-color: rgba(99, 102, 241, 0.3);
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary), var(--color-brand-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientFlow 5s ease infinite;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.brutalist-border {
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 1rem;
}

.brutalist-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}
`;
fs.writeFileSync('src/index.css', cssContent, 'utf8');

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/rounded-none/g, 'rounded-2xl');
  content = content.replace(/border-2 border-black/g, 'border border-indigo-100');
  content = content.replace(/hover:bg-black/g, 'hover:bg-indigo-600 hover:shadow-indigo-500/25');
  content = content.replace(/bg-\[#FF4F00\]/g, 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white');
  content = content.replace(/bg-black/g, 'bg-slate-900');
  content = content.replace(/text-black/g, 'text-slate-800');
  content = content.replace(/text-gray-600/g, 'text-slate-500');
  
  // Custom replacements for buttons
  content = content.replace(
    /bg-brand-primary text-white border border-indigo-100 hover:bg-indigo-600 hover:shadow-indigo-500\/25 hover:-translate-y-1 brutalist-shadow transition-all/g,
    'bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all'
  );
  
  content = content.replace(/border-y-2/g, 'border-none');
  
  // Fix CTA Section text colors explicitly if they have bg-[#FF4F00]
  if(filePath.includes('Home.tsx')){
      content = content.replace(/bg-\[#E5E5E0\]/g, 'bg-white/80 backdrop-blur-md');
  }

  // Navbar
  if(filePath.includes('Navbar.tsx')) {
     content = content.replace(/bg-\[#E5E5E0\] border-b-2 border-black/g, 'bg-white/80 backdrop-blur-md border-b border-indigo-50');
     content = content.replace(/bg-white\/80 backdrop-blur-md border-b border-indigo-50\/95/g, 'bg-white/80 backdrop-blur-md border-b border-indigo-50');
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
console.log('Made beautiful!');
