module.exports = {
  lng: window.localStorage.getItem('lang') || 'ua',
  ns: ['tranlsations'],
  defaultNS: 'tranlsations',
  fallbackNS: 'tranlsations',
  fallbackLng: 'en',
  interpolation: { escapeValue: false, prefix: '{{', suffix: '}}' },
};
