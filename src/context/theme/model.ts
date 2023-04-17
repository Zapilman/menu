export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface Theme {
  '--primary': string;
  '--secondary': string;
  '--background': string;
  '--white': string;
}
