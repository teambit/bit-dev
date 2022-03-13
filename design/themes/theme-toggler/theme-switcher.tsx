import React, { ReactNode, useState } from 'react';
import type { BaseThemeProps } from '@teambit/design.themes.base-theme';
import { DefaultThemeProvider, LightAndDarkThemes } from './default-themes';

import { ThemeOption, ThemePicker, ThemePickerContext } from './theme-picker-context';

export type ThemeSwitcherProps = BaseThemeProps & {
  children?: ReactNode;
  /** list of themes to toggle through */
  themes?: ThemeOption[];
  /** display name of the initial theme to use */
  defaultTheme?: 'light' | 'dark' | string;
};

// (*) 'theme' is as object based on ComponentType, which may be a function ("function component")
// this confuses react's state, as it can accept functions (e.g. setState(x=>x+1) )
// setting it through a function resolves this

export function ThemeSwitcher({ children, themes = LightAndDarkThemes, defaultTheme, ...props }: ThemeSwitcherProps) {
  const initialValue = themes.find((x) => x.themeName === defaultTheme) || themes[0];

  // workaround (*)
  const [theme, setTheme] = useState<ThemeOption>(() => initialValue);

  const picker: ThemePicker = {
    // workaround (*)
    setTheme: (themeTarget) => setTheme(() => themeTarget),
    current: theme,
    options: themes,
  };

  const Provider = theme || DefaultThemeProvider;

  return (
    <ThemePickerContext.Provider value={picker}>
      <Provider {...props}>{children}</Provider>
    </ThemePickerContext.Provider>
  );
}
