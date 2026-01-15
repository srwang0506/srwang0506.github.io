const fs = require('fs');
const content = fs.readFileSync('main.js', 'utf-8');
const lines = content.split(/\r?\n/);

// 找到 init() 函数中的最后一个位置，在 initTheme() 之前加上 renderPubs() 调用
let insertIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('initTheme();')) {
    insertIndex = i;
    break;
  }
}

if (insertIndex === -1) {
  console.log('Could not find initTheme() call');
  process.exit(1);
}

// 在 initTheme() 之前插入 renderPubs 调用
lines.splice(insertIndex, 0, '  renderPubs(publicationData);');

fs.writeFileSync('main.js', lines.join('\n'));
console.log('Added renderPubs() call to init()');
