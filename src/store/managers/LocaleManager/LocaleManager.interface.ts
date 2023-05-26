export interface ILocaleManager {
  getLocale: () => string;
  setLocale: (locale: string) => void;
}
