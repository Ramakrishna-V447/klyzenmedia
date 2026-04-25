import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Hide floating hero images on mobile
content = content.replace(/className="absolute top-20 left-\[10%\]/g, 'className="hidden lg:block absolute top-20 left-[10%]');
content = content.replace(/className="absolute bottom-12 right-\[12%\]/g, 'className="hidden lg:block absolute bottom-12 right-[12%]');

// Decrease horizontal padding on mobile for the hero main text to give it more breathing room.
content = content.replace(/px-4 sm:px-6 lg:px-8 relative z-10 w-full/g, 'px-4 sm:px-6 lg:px-8 relative z-10 w-full');

// Other mobile size adjustments
content = content.replace(/text-4xl sm:text-5xl md:text-7xl lg:text-8xl/g, 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf-8');
console.log('Mobile optimizations part 2 applied');
