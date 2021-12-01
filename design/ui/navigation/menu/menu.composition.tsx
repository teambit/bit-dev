import React from 'react';
import { NavigationMenu } from './menu';
import { menuContent } from './menu.mocks';

export const BasicMenu = () => <NavigationMenu links={menuContent} />;
