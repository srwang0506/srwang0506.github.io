const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

let updated = content.replace(
  '</head>',
  '  <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>\n  </head>'
);

updated = updated.replace(
  '<div class="footer-tagline">Built with passion for research</div>',
  '<div class="footer-tagline">Built with passion for research</div>\n          <div class="footer-stats">\n            <span class="stat-item">\n              <i class="fas fa-eye"></i>\n              <span id="busuanzi_value_site_pv">-</span> views\n            </span>\n            <span class="stat-divider">|</span>\n            <span class="stat-item">\n              <i class="fas fa-users"></i>\n              <span id="busuanzi_value_site_uv">-</span> visitors\n            </span>\n          </div>'
);

fs.writeFileSync('index.html', updated);
console.log('Added Busuanzi counter to HTML');
