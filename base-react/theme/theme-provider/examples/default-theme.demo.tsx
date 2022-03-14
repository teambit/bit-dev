/* THIS EXAMPLE DEMONSTRATES HOW TO USE THE THEME-RPOVIDER TO GENERATE A THEME AND A THEME SCHEMA */

import { createTheme } from '../create-theme';
/* defines the design tokens and sets their default values.*/
const defaultDesignTokenValues = {
  colorBackground: '#ffffff',
  colorText: '#304c78',
};

/* creates a theme using the design token default values
 * ('Theme' contains a Context and a hook to retrieve its values)
 */
export const Theme = createTheme({ theme: defaultDesignTokenValues });

/*
 * creates a schema type to ensure standardization of future themes
 * For example: https://bit.dev/learnbit/base-react/theme/my-dark-theme/~code/my-dark-theme.ts
 */
export type ThemeSchema = typeof defaultDesignTokenValues;
