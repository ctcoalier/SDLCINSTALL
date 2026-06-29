// Minimal static-site validation: confirm required files exist and are non-empty.
// No dependencies (consistent with the foundational-frontend-stack ADR).
const fs = require('fs');

const required = [
  'src/index.html',
  'src/news.html',
  'src/guides.html',
  'src/spec.html',
  'src/assets/styles.css',
];

let ok = true;
for (const f of required) {
  if (!fs.existsSync(f)) {
    console.error('missing: ' + f);
    ok = false;
  } else if (fs.statSync(f).size === 0) {
    console.error('empty: ' + f);
    ok = false;
  }
}

if (!ok) {
  process.exit(1);
}
console.log('static-site validate: all required files present and non-empty');
