import React, { useMemo } from 'react';
import type { CreateThemeOptions } from './create-theme';

export type ThemeProviderProps<T> = {
  overrides?: Partial<T>;
} & React.HTMLAttributes<HTMLDivElement>;

export type ThemeProviderType<T> = React.ComponentType<ThemeProviderProps<T>>;

export function createThemeProvider<T>(
  ThemeContext: React.Context<T>,
  options: CreateThemeOptions<T>
): ThemeProviderType<T> {
  return ({ children, overrides, style, ...rest }: ThemeProviderProps<T>) => {
    const theme = useMemo(
      () => ({
        ...options.theme,
        ...overrides,
      }),
      [options.theme, overrides]
    );

    if (options.withoutCssVars) return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
    const cssVars = computeCssVars<T>(theme, options.prefix);

    return (
      <div style={{ ...cssVars, ...style }} {...rest}>
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </div>
    );
  };
}

export function computeCssVars<T>(theme: T, prefix?: string): React.CSSProperties {
  return Object.entries(theme)
    .map(([key, val]) => {
      const varName = key.replace(/[A-Z]/g, '-$&').toLowerCase();
      const varKey = prefix ? `--${prefix}-${varName}` : `--${varName}`;
      return [varKey, val];
    })
    .reduce((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
}
