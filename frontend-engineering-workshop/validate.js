const fs = require('fs');

// Load data (using Function constructor for global scope)
const dataCode = fs.readFileSync('./js/wordData.js', 'utf-8').replace(/const WordRoots/, 'globalThis.WordRoots');
const configCode = fs.readFileSync('./js/siteConfig.js', 'utf-8').replace(/const siteConfig/, 'globalThis.siteConfig');
new Function(dataCode)();
new Function(configCode)();

let errors = [], warnings = [];
console.log('📊 数据量：' + WordRoots.length + ' 个知识点');

WordRoots.forEach((item, index) => {
  const label = '#' + item.id;
  if (!item.root) errors.push(label + ': 缺 root');
  if (!item.meaning) errors.push(label + ': 缺 meaning');
  if (!item.description || item.description.length < 50) warnings.push(label + ': description 短');
  if (!item.examples || item.examples.length < 3) errors.push(label + ': examples<3');
  if (!item.quiz || item.quiz.options?.length !== 4) errors.push(label + ': quiz 选项≠4');
});

const required = ['topic','siteName','itemName','itemCount','hero','stats','footer','cta'];
const missing = required.filter(k => !siteConfig[k]);
if (missing.length) console.log('❌ siteConfig 缺少: ' + missing.join(', '));
else console.log('✓ siteConfig 验证通过');

const files = ['index.html','learn.html','flashcard.html','roots.html','progress.html','root-detail.html','manifest.json','sw.js','css/minimal.css','js/storage.js','icon-192.png','icon-512.png'];
files.forEach(f => {
  if (fs.existsSync(f)) console.log('✓ ' + f);
  else console.log('❌ 缺失: ' + f);
});

if (errors.length > 0) { console.log('\n❌ ' + errors.length + ' 错误'); errors.forEach(e => console.log('  - ' + e)); }
else console.log('\n✅ 数据验证通过！无错误');
if (warnings.length > 0) console.log('⚠️ ' + warnings.length + ' 个警告');
