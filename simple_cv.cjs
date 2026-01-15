const fs = require('fs');
const content = fs.readFileSync('style.css', 'utf-8');
const lines = content.split(/\r?\n/);

let cvStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('/* Timeline (Education & Experience) */')) {
    cvStart = i;
    break;
  }
}

let cvEnd = -1;
for (let i = cvStart + 1; i < lines.length; i++) {
  if (lines[i].includes('/* Misc Section */')) {
    cvEnd = i;
    break;
  }
}

const newCvCSS = [
  '/* Timeline (Education & Experience) */',
  '.cv-item {',
  '  padding: 1.5rem 0;',
  '  border-bottom: 1px solid var(--border-color);',
  '}',
  '.cv-item:last-child {',
  '  border-bottom: none;',
  '}',
  '.cv-date {',
  '  color: var(--text-light);',
  '  font-family: var(--font-mono);',
  '  font-size: 0.9rem;',
  '  margin-bottom: 0.4rem;',
  '  font-weight: 500;',
  '}',
  '.cv-main { }',
  '.cv-title {',
  '  font-size: 1.1rem;',
  '  font-weight: 700;',
  '  margin-bottom: 0.2rem;',
  '  color: var(--text-main);',
  '}',
  '.cv-sub {',
  '  color: var(--primary);',
  '  font-size: 0.95rem;',
  '  font-weight: 600;',
  '  margin-bottom: 0.6rem;',
  '}',
  '.cv-desc {',
  '  font-size: 0.9rem;',
  '  color: var(--text-muted);',
  '  line-height: 1.6;',
  '}',
  '.cv-desc div {',
  '  margin-bottom: 0.3rem;',
  '}',
];

lines.splice(cvStart, cvEnd - cvStart, ...newCvCSS);
fs.writeFileSync('style.css', lines.join('\n'));
console.log('CV design simplified to clean minimal style');
