import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import Backend from 'i18next-http-backend';

import i18nConfig from './i18n.config';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: window.localStorage.getItem('lang') || 'ua',
    debug: false,
    cleanCode: true,
    ...i18nConfig,
    backend: {
      loadPath: 'https://www.zdorov-front.com/translations/{{lng}}/{{ns}}.json',
    },
  });

// https://www.zdorov-front.com/translations/en/translations.json
// https://www.zdorov-front.com/translations/en/tranlsations.json x
// https://www.zdorov-front.com/translations/en/translations.json

export default i18next;
