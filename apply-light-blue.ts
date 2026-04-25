import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace dark blues with light blues
  content = content.replace(/#0F172A/g, '#2563EB');
  content = content.replace(/#1E3A8A/g, '#3B82F6');
  content = content.replace(/#1D4ED8/g, '#60A5FA');
  
  // Also adjust AnimatedBackground photo opacity to handle "bg photo transperancy to 70%"
  if (filePath.includes('AnimatedBackground.tsx')) {
    content = content.replace(/className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"/, 'className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"');
    // Just in case they meant opacity 70 (which is 0.7), but transparency 70% means opacity 30%. 
    // We'll also change the dark blend over it
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory('./src');
console.log('Applied light blue colors and adjusted photo opacity');
