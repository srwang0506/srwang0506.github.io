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
  '  gap: 2rem;',
  '  padding: 2rem 0;',
  '  border-bottom: 1px solid var(--border-color);',
  '  position: relative;',
  '}',
  '.cv-item::after {',
  '  content: "";',
  '  position: absolute;',
  '  left: -1rem;',
  '  top: 50%;',
  '  transform: translateY(-50%);',
  '  width: 2px;',
  '  height: 40%;',
  '  background: var(--primary);',
  '  opacity: 0.3;',
  '}',
  '.cv-item:first-child::after {',
  '  top: 25%;',
  '  height: 75%;',
  '}',
  '.cv-item:last-child {',
  '  border-bottom: none;',
  '}',
  '.cv-item:last-child::after {',
  '  height: 50%;',
  '}',
  '.cv-date {',
  '  color: var(--text-light);',
  '  font-family: var(--font-mono);',
  '  font-size: 0.85rem;',
  '  min-width: 110px;',
  '  flex-shrink: 0;',
  '  font-weight: 500;',
  '  letter-spacing: 0.5px;',
  '  padding-top: 0.3rem;',
  '}',
  '.cv-main { flex: 1; }',
  '.cv-title {',
  '  font-size: 1.15rem;',
  '  font-weight: 700;',
  '  margin-bottom: 0.4rem;',
  '  color: var(--text-main);',
  '  letter-spacing: -0.3px;',
  '}',
  '.cv-sub {',
  '  color: var(--primary);',
  '  font-size: 0.95rem;',
  '  font-weight: 600;',
  '  margin-bottom: 0.8rem;',
  '}',
  '.cv-desc {',
  '  font-size: 0.95rem;',
  '  color: var(--text-muted);',
  '  line-height: 1.7;',
  '}',
  '.cv-desc div {',
  '  margin-bottom: 0.5rem;',
  '  padding-left: 1.2rem;',
  '  position: relative;',
  '}',
  '.cv-desc div::before {',
  '  content: "";',
  '  position: absolute;',
  '  left: 0;',
  '  color: var(--primary);',
  '  font-size: 0.5rem;',
  '  top: 0.45rem;',
  '}',
];

lines.splice(cvStart, cvEnd - cvStart, ...newCvCSS);
fs.writeFileSync('style.css', lines.join('\n'));
console.log('CV design updated to premium minimal style');
