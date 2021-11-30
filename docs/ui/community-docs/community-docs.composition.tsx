import React from 'react';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { useLocation, MemoryRouter } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.react-router.link';
import { NavLink } from '@teambit/ui-foundation.ui.react-router.nav-link';
import { CommunityDocs } from './community-docs';

const routing = { Link, NavLink, useLocation };

export const BasicCommunityDocs = () => (
  <RoutingProvider value={routing}>
    <SidebarProvider>
      <MemoryRouter>
        <CommunityDocs />
      </MemoryRouter>
    </SidebarProvider>
  </RoutingProvider>
);
