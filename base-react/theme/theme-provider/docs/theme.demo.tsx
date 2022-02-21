import React from 'react';
import { Theme } from '../examples/default-theme.demo';
import { darkThemeOverrides } from '../examples/dark-theme.demo';
import { ButtonStyledWithCss } from '../examples/button-styled-with-css.demo';
import { ButtonStyledWithJs } from '../examples/button-styled-with-js.demo';
import style from './style.module.scss';

export const DefaultThemeExample = () => {
  return (
    <Theme>
      <div className={style.container}>
        <ButtonStyledWithJs />
        <ButtonStyledWithCss />
      </div>
    </Theme>
  );
};

export const DarkThemeExample = () => {
  return (
    <Theme overrides={darkThemeOverrides}>
      <div className={style.container}>
        <ButtonStyledWithJs />
        <ButtonStyledWithCss />
      </div>
    </Theme>
  );
};
