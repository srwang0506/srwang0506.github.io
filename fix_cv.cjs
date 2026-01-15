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
  '  display: grid;',
  '  grid-template-columns: 120px 1fr;',
  '  gap: 2rem;',
  '  padding: 1.5rem 0;',
  '  border-bottom: 1px solid var(--border-color);',
  '  transition: all 0.25s;',
  '}',
  '.cv-item:last-child {',
  '  border-bottom: none;',
  '}',
  '.cv-item:hover {',
  '  padding-left: 1rem;',
  '  padding-right: 1rem;',
  '}',
  '.cv-date {',
  '  color: var(--text-light);',
  '  font-family: var(--font-mono);',
  '  font-size: 1rem;',
  '  flex-shrink: 0;',
  '}',
  '.cv-main { flex: 1; }',
  '.cv-title {',
  '  font-size: 1.2rem;',
  '  font-weight: 600;',
  '  margin-bottom: 0.3rem;',
  '  color: var(--text-main);',
  '}',
  '.cv-sub {',
  '  color: var(--text-muted);',
  '  font-size: 1rem;',
  '  font-style: italic;',
  '  margin-bottom: 0.5rem;',
  '}',
  '.cv-desc {',
  '  font-size: 1rem;',
  '  color: var(--text-muted);',
  '  line-height: 1.6;',
  '}',
  '.cv-desc div {',
  '  margin-bottom: 0.3rem;',
  '  padding-left: 1.2rem;',
  '  position: relative;',
  '}',
  '.cv-desc div::before {',
  '  content: "";',
  '  position: absolute;',
  '  left: 0;',
  '  color: var(--primary);',
  '}',
];

lines.splice(cvStart, cvEnd - cvStart, ...newCvCSS);
fs.writeFileSync('style.css', lines.join('\n'));
console.log('CV CSS redesigned');
