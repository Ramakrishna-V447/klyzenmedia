import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix broken hovers
  content = content.replace(/hover: hover:/g, '');
  content = content.replace(/transition-all:[a-zA-Z0-9\-]+/g, 'transition-all');
  content = content.replace(/border-4 border-black border-2\/60/g, 'border-2 border-black');
  content = content.replace(/bg-gradient-to-b bg-\[#FF4F00\] text-white border-y-2 border-black/g, 'bg-[#FF4F00] border-y-2 border-black');
  
  // Services
  content = content.replace(/hover:shadow-brand-primary\/15/g, '');
  content = content.replace(/hover:border-brand-primary\/30/g, '');
  content = content.replace(/shadow-lg hover:shadow-brand-primary\/20 hover:shadow-xl /g, '');
  
  // Fix buttons that became text-white border-2 border-black hover:bg-black hover:-translate-y-1 brutalist-shadow transition-all
  // and got some extra junk appended
  content = content.replace(/transition-all  hover: hover/g, 'transition-all');
  content = content.replace(/  hover: transition-all/g, 'transition-all');
  
  // Fix CTA Section text colors explicitly if they have bg-[#FF4F00]
  if(filePath.includes('Home.tsx')){
      content = content.replace(/<h2 className="([^"]*)text-black([^"]*)">Ready to Scale Your Brand\?<\/h2>/, '<h2 className="$1text-white$2">Ready to Scale Your Brand?</h2>');
      content = content.replace(/<p className="([^"]*)text-black([^"]*)">Stop blending in/, '<p className="$1text-white$2">Stop blending in');
      
      // Fix pulse shadow animation
      content = content.replace(/"0px 0px 0px 0px rgba\(139, 92, 246, 0\)",/, '"0px 0px 0px 0px rgba(0, 0, 0, 0)",');
      content = content.replace(/"0px 0px 20px 5px rgba\(139, 92, 246, 0\.15\)",/, '"0px 0px 20px 5px rgba(0, 0, 0, 0.3)",');
      content = content.replace(/"0px 0px 0px 0px rgba\(139, 92, 246, 0\)"/, '"0px 0px 0px 0px rgba(0, 0, 0, 0)"');
  }

  // Navbar
  if(filePath.includes('Navbar.tsx')) {
     content = content.replace(/bg-\[#E5E5E0\] border-b-2 border-black\/95/g, 'bg-[#E5E5E0] border-b-2 border-black');
     content = content.replace(/backdrop-blur-md/g, '');
  }

  // Pricing
  if(filePath.includes('Pricing.tsx')) {
      content = content.replace(/from-brand-primary to-brand-secondary/g, 'from-brand-primary to-brand-primary delay-100');
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
console.log('Cleanup complete!');
