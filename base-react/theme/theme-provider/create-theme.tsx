import React, { createContext, useContext } from 'react';
import { createThemeProvider, ThemeProviderType } from './create-theme-provider';

export type CreateThemeOptions<T> = {
  /**
   * theme object.
   */
  theme: T;

  /**
   * determine whether to render theme into css vars.
   */
  withoutCssVars?: boolean;

  /**
   * prefix to use for css vars. defaults to nothing.
   */
  prefix?: string;
};

/**
 * Type of a Theme instance.
 */
export type ThemeType<T> = {
  ThemeProvider: ThemeProviderType<T>;
  useTheme: () => T;
};

/**
 * create a new theme.
 */
export function createTheme<T>({ theme, prefix, withoutCssVars }: CreateThemeOptions<T>): ThemeType<T> {
  const ThemeContext: React.Context<T> = createContext<T>(theme);

  const ThemeProvider = createThemeProvider<T>(ThemeContext, {
    theme,
    prefix,
    withoutCssVars,
  });

  const useTheme = () => {
    return useContext(ThemeContext);
  };

  return {
    ThemeProvider,
    useTheme,
  };
}

export type ThemeProps<T> = {
  schema: T;
};
