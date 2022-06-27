import React from 'react';
import { WikiApp } from './app';
import { MemoryRouter } from 'react-router-dom';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';

export const WikiBasic = () => {
  return (
    // this usually comes from the community-react env,
    // but at this moment apps have to be teambit.harmony/aspect!
    <NavigationProvider implementation={reactRouterAdapter}>
      <MemoryRouter initialEntries={['/']}>
        <WikiApp />
      </MemoryRouter>
    </NavigationProvider>
  );
};
