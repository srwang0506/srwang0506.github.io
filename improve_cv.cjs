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
  '  display: flex;',
  '  gap: 1.5rem;',
  '  padding: 1.2rem 1.5rem;',
  '  margin-bottom: 0.8rem;',
  '  background: var(--card-bg);',
  '  border-left: 3px solid var(--primary);',
  '  border-radius: 4px;',
  '  transition: all 0.2s ease;',
  '}',
  '.cv-item:hover {',
  '  box-shadow: var(--shadow-sm);',
  '  transform: translateX(4px);',
  '}',
  '.cv-date {',
  '  color: var(--text-light);',
  '  font-family: var(--font-mono);',
  '  font-size: 0.9rem;',
  '  min-width: 120px;',
  '  flex-shrink: 0;',
  '}',
  '.cv-main { flex: 1; }',
  '.cv-title {',
  '  font-size: 1.1rem;',
  '  font-weight: 600;',
  '  margin-bottom: 0.2rem;',
  '  color: var(--text-main);',
  '}',
  '.cv-sub {',
  '  color: var(--text-muted);',
  '  font-size: 0.95rem;',
  '  font-style: italic;',
  '  margin-bottom: 0.4rem;',
  '}',
  '.cv-desc {',
  '  font-size: 0.95rem;',
  '  color: var(--text-muted);',
  '  line-height: 1.5;',
  '}',
  '.cv-desc div {',
  '  margin-bottom: 0.2rem;',
  '  padding-left: 1rem;',
  '  position: relative;',
  '}',
  '.cv-desc div::before {',
  '  content: "";',
  '  position: absolute;',
  '  left: 0;',
  '  color: var(--primary-light);',
  '}',
];

lines.splice(cvStart, cvEnd - cvStart, ...newCvCSS);
fs.writeFileSync('style.css', lines.join('\n'));
console.log('CV design improved');
