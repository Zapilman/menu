import i18next from 'src/i18n';

import { ILocaleManager } from './LocaleManager.interface';
import { TLanguage } from './LocaleManager.types';

class LocaleManager implements ILocaleManager {
  manager = i18next;

  getLocale() {
    return this.manager.language;
  }

  setLocale(locale: TLanguage) {
    this.manager.changeLanguage(locale);
  }
}

export const localeManager = new LocaleManager();
