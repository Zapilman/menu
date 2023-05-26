import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: 'hello',
        menu: 'Menu',
        sendFeedBack: 'Send Feedback',
      },
    },
    ua: {
      translation: {
        hello: 'Привіт',
        menu: 'Меню',
        sendFeedBack: 'Залишити відгук',
      },
    },
  },
  lng: window.localStorage.getItem('lang') || 'ua',
});

export default i18next;
