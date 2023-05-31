module.exports = {
  lng: window.localStorage.getItem('lang') || 'ua',
  ns: ['translations'],
  defaultNS: 'translations',
  fallbackNS: 'translations',
  fallbackLng: 'en',
  interpolation: { escapeValue: false, prefix: '{{', suffix: '}}' },
};
