import React from 'react';
import {ThemeContext} from '@teambit/design.theme.theme-context';
import { Header } from './header';

export const BasicHeader = () => (
  <ThemeContext>
    <Header  />
  </ThemeContext>
);
