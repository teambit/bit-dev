import React from 'react';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { RouterProvider } from '@teambit/base-react.navigation.router-context';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { CommunityDocs } from './community-docs';

export const BasicCommunityDocs = () => (
  <RouterProvider value={reactRouterAdapter}>
    <SidebarProvider>
      {/* @ts-ignore @HACK, cannot nest MemoryRouter inside another router - see https://github.com/remix-run/react-router/issues/7375 */}
      <UNSAFE_LocationContext.Provider value={null}>
        <MemoryRouter>
          <CommunityDocs />
        </MemoryRouter>
      </UNSAFE_LocationContext.Provider>
    </SidebarProvider>
  </RouterProvider>
);
