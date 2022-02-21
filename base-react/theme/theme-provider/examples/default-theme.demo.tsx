/* THIS EXAMPLE DEMONSTRATES HOW TO USE THE THEME-RPOVIDER TO GENERATE A THEME AND A THEME SCHEMA */

import { createTheme } from '../create-theme';
/* defines the design tokens and sets their default values.*/
const defaultDesignTokenValues = {
  colorBackground: '#ffffff',
  colorText: '#304c78',
  colorBorder: '#1f304a',
  spacingMedium: '1rem',
  buttonFontWeight: 700,
};

/* creates a theme using the design token default values */
export const {
  /*
   * a React Context component containing the token values
   * this component can also be used as a way to inject CSS props to the page
   * CSS props are converted from camelCase to CSS props format (for example: 'colorText' --> '--color-text')
   */
  ThemeProvider: Theme,
  /* a hook to access the design token values (as JS vars) */
  useTheme,
} = createTheme({
  theme: defaultDesignTokenValues,
});

/*
 * creates a schema type to ensure standardization of future themes
 * For example: https://bit.dev/learnbit/base-react/theme/my-dark-theme/~code/my-dark-theme.ts
 */
export type ThemeSchema = typeof defaultDesignTokenValues;
