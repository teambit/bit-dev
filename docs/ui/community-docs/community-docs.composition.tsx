import React from 'react';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { MemoryRouter } from 'react-router-dom';
import { RouterProvider } from '@teambit/base-react.navigation.router-context';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { CommunityDocs } from './community-docs';

export const BasicCommunityDocs = () => (
  <RouterProvider value={reactRouterAdapter}>
    <SidebarProvider>
      <MemoryRouter>
        <CommunityDocs />
      </MemoryRouter>
    </SidebarProvider>
  </RouterProvider>
);
