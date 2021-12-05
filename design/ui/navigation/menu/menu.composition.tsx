import React from 'react';
import { NavigationMenu } from './menu';
import { menuContent } from './menu.mocks';

export const BasicMenu = () => <NavigationMenu data-testid="basic-menu" links={menuContent} />;
