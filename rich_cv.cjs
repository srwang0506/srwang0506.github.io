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
  '  padding: 1.8rem 1.5rem;',
  '  margin-bottom: 1rem;',
  '  border-left: 4px solid var(--primary);',
  '  background: rgba(59, 130, 246, 0.02);',
  '  border-radius: 4px;',
  '  position: relative;',
  '}',
  '.cv-item::before {',
  '  content: "";',
  '  position: absolute;',
  '  left: -8px;',
  '  top: 2.2rem;',
  '  width: 16px;',
  '  height: 16px;',
  '  background: var(--primary);',
  '  border-radius: 50%;',
  '  border: 3px solid var(--bg-main);',
  '}',
  '.cv-date {',
  '  color: var(--text-light);',
  '  font-family: var(--font-mono);',
  '  font-size: 0.85rem;',
  '  margin-bottom: 0.6rem;',
  '  font-weight: 600;',
  '  letter-spacing: 0.3px;',
  '  display: inline-block;',
  '  background: var(--primary);',
  '  color: white;',
  '  padding: 0.3rem 0.7rem;',
  '  border-radius: 3px;',
  '  font-size: 0.8rem;',
  '}',
  '.cv-main { }',
  '.cv-title {',
  '  font-size: 1.15rem;',
  '  font-weight: 700;',
  '  margin-bottom: 0.3rem;',
  '  color: var(--text-main);',
  '  letter-spacing: -0.3px;',
  '}',
  '.cv-title::after {',
  '  content: "";',
  '  display: block;',
  '  height: 2px;',
  '  background: linear-gradient(90deg, var(--primary) 0%, transparent 100%);',
  '  width: 40px;',
  '  margin-top: 0.4rem;',
  '}',
  '.cv-sub {',
  '  color: var(--primary);',
  '  font-size: 0.95rem;',
  '  font-weight: 600;',
  '  margin-top: 0.6rem;',
  '  margin-bottom: 0.8rem;',
  '}',
  '.cv-desc {',
  '  font-size: 0.9rem;',
  '  color: var(--text-muted);',
  '  line-height: 1.7;',
  '}',
  '.cv-desc div {',
  '  margin-bottom: 0.4rem;',
  '  padding-left: 1.2rem;',
  '  position: relative;',
  '}',
  '.cv-desc div::before {',
  '  content: "";',
  '  position: absolute;',
  '  left: 0;',
  '  color: var(--primary);',
  '  font-weight: bold;',
  '}',
];

lines.splice(cvStart, cvEnd - cvStart, ...newCvCSS);
fs.writeFileSync('style.css', lines.join('\n'));
console.log('CV design updated with elements and visual richness');
