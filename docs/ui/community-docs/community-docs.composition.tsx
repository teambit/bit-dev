import React from 'react';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { useLocation, MemoryRouter } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.react-router.link';
import { NavLink } from '@teambit/ui-foundation.ui.react-router.nav-link';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { CommunityDocs } from './community-docs';

// TODO - replace with legacy routing adapter and remove once we don't use legacy links anymore
const routing = { Link, NavLink, useLocation };

export const BasicCommunityDocs = () => (
  <RoutingProvider value={routing}>
    <ReactRouterRoutingProvider>
      {/* @ts-ignore - TODO remove when sidebar use thew new link components */}
      <SidebarProvider>
        <MemoryRouter>
          <CommunityDocs />
        </MemoryRouter>
      </SidebarProvider>
    </ReactRouterRoutingProvider>
  </RoutingProvider>
);
