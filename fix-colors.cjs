const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/LSC16/Desktop/Portfolio/frontend/src/components';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let original = content;
    
    // Replace darker grays with charcoal
    content = content.replace(/text-gray-[789]00/g, 'text-charcoal');
    // Replace medium/lighter grays with medium-gray
    content = content.replace(/text-gray-[456]00/g, 'text-medium-gray');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated colors in ${file}`);
    }
  }
});
