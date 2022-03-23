/* THIS EXAMPLE DEMONSTRATES HOW TO STYLE A COMPONENT WITH JS TO MAKE IT THEMEABLE */

import React from 'react';
import { Theme } from './default-theme.demo';

/* styles this button using the JS variables made available by the theme provider */
export const Button = () => {
  /* gets the theme's design token values using its hook */
  const { colorBackground, colorText } = Theme.useTheme();
  /* uses the design token values */
  const jsVars = {
    backgroundColor: colorBackground,
    color: colorText,
  };
  return <button style={jsVars}>A Button Styled using JS Vars</button>;
};
