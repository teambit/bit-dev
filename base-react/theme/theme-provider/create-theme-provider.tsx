import React from 'react';
import type { CreateThemeOptions } from './create-theme';

export type ThemeProviderProps<T> = {
  theme: T;
} & React.HTMLAttributes<HTMLDivElement>;

export type ThemeProviderType<T> = React.ComponentType<ThemeProviderProps<T>>;

export function createThemeProvider<T>(
  ThemeContext: React.Context<T>,
  options: CreateThemeOptions<T>
): ThemeProviderType<T> {
  return ({ children, theme, ...rest }: ThemeProviderProps<T>) => {
    if (options.withoutCssVars) return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
    const cssVars = computeCssVars<T>(theme, options.prefix);

    return (
      <div style={{ ...cssVars }} {...rest}>
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </div>
    );
  };
}

export function computeCssVars<T>(theme: T, prefix?: string): React.CSSProperties {
  return Object.entries(theme)
    .map(([key, val]) => {
      const varKey = prefix ? `--${prefix}-${key}` : `--${key}`;
      return [varKey, val];
    })
    .reduce((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
}
