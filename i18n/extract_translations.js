// const { LokaliseApi } = require('@lokalise/node-api');

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
  const regex = /translate\(['"](.+?)['"]/g; // Пользовательский регулярный выражение для поиска строк переводов
  let match;

  while ((match = regex.exec(content)) !== null) {
    const translationKey = match[1];
    translations[translationKey] = translationKey;
  }
});

// const jsonContent = JSON.stringify(translations, null, 2);
// fs.writeFileSync('translations.json', jsonContent, 'utf8');

// (async () => {
//   const lokaliseApi = new LokaliseApi({
//     apiKey: 'b319d056c11b5779919044529c75d9c3db60a45d',
//   });
//   const projects = await lokaliseApi.projects().list();
//   projects.items[0].name;
//   console.log(projects.items[0].name);

//   process = await lokaliseApi.files().upload(project_id, {
//     data: data_base64,
//     filename: 'translations.json',
//     lang_iso: 'en',
//   });
//   process.status; // => 'queued'

//   console.log(translations);
// })();
