import React from 'react';
import { menuContent } from '@teambit/design.ui.navigation.menu';
import { Header } from './header';

export const BasicHeader = () => {
  return <Header menuLinks={menuContent} />;
};
