/* THIS EXAMPLE DEMONSTRATES HOW TO STYLE A COMPONENT WITH JS TO MAKE IT THEMEABLE */

import React from 'react';
import { useTheme } from './default-theme.demo';

/* styles this button using the JS variables made available by the theme provider */
export const ButtonStyledWithJs = () => {
  /* gets the theme's design token values using its hook */
  const {
    colorBackground,
    colorText,
    colorBorder,
    spacingMedium,
    buttonFontWeight,
  } = useTheme();
  /* uses the design token values */
  const jsVars = {
    backgroundColor: colorBackground,
    color: colorText,
    borderColor: colorBorder,
    padding: spacingMedium,
    fontWeight: buttonFontWeight,
  };
  return <button style={jsVars}>A Button Styled using JS Vars</button>;
};
