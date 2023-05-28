const fs = require('fs');
const path = require('path');
const glob = require('glob');

const translations = {};

const files = glob.sync(['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], {
  ignore: [
    'node_modules/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.d.ts',
    '**/*.json',
  ],
});

files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /translate\(['"](.+?)['"]/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const translationKey = match[1];
    translations[translationKey] = translationKey;
  }
});
const jsonContent = JSON.stringify(translations, null, 2);
fs.writeFileSync('translations.json', jsonContent, 'utf8');
console.log(translations);
