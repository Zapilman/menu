import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
} from 'react';

import { ETheme } from './model';

interface ThemeContextProps {
  themeType: ETheme;
  setCurrentTheme: Dispatch<SetStateAction<ETheme>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: ETheme.LIGHT,
} as ThemeContextProps);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ETheme>(
    matchMedia('(prefers-color-scheme: dark)').matches
      ? ETheme.DARK
      : ETheme.LIGHT,
  );

  useEffect(() => {
    if (currentTheme === ETheme.DARK) {
      require('_styles/dark.css');
    }
    if (currentTheme === ETheme.LIGHT) {
      require('_styles/light.css');
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
