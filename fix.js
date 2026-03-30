const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/LSC16/Desktop/Portfolio/frontend/src/components';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('horizontal-')) {
      content = content.replace(/horizontal-/g, 'rounded-');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${file}`);
    }
  }
});
