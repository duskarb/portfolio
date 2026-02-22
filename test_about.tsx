import fs from 'fs';
const content = fs.readFileSync('components/about-section.tsx', 'utf-8');
console.log(content.slice(-200));
