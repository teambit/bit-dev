/* THIS EXAMPLE DEMONSTRATES HOW TO CUSTOMIZE/EXTEND A THEME THAT WAS GENERATED BY THE THEME-PROVIDER */

import type { ThemeSchema } from './default-theme.demo';

/* setS the dark theme values according to the theme's schema  */
export const darkThemeOverrides: Partial<ThemeSchema> = {
  colorText: '#749bd6',
  colorBackground: '#474747',
};
