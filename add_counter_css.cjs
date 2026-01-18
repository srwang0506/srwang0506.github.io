const fs = require('fs');
const content = fs.readFileSync('style.css', 'utf-8');
const lines = content.split(/\r?\n/);

// 找到 footer 部分的最后，在文件末尾之前添加新样式
let insertIndex = lines.length - 1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('.footer-tagline')) {
    insertIndex = i;
    // 找到这个规则的结束
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].includes('}') && !lines[j].includes('{')) {
        insertIndex = j + 1;
        break;
      }
    }
    break;
  }
}

const newStyles = [
  '.footer-stats {',
  '  display: flex;',
  '  align-items: center;',
  '  justify-content: center;',
  '  gap: 1rem;',
  '  margin-top: 1rem;',
  '  padding-top: 0.75rem;',
  '  border-top: 1px solid var(--border-color);',
  '  font-size: 0.85rem;',
  '  color: var(--text-muted);',
  '}',
  '.stat-item {',
  '  display: flex;',
  '  align-items: center;',
  '  gap: 0.4rem;',
  '  font-family: var(--font-mono);',
  '}',
  '.stat-item i {',
  '  color: var(--primary);',
  '  font-size: 0.9rem;',
  '}',
  '.stat-item span {',
  '  font-weight: 600;',
  '  color: var(--text-main);',
  '}',
  '.stat-divider {',
  '  color: var(--text-light);',
  '  opacity: 0.5;',
  '}',
];

lines.splice(insertIndex, 0, ...newStyles);
fs.writeFileSync('style.css', lines.join('\n'));
console.log('Added Busuanzi counter styles');
