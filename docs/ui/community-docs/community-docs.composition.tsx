import React from 'react';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { useLocation } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.react-router.link';
import { NavLink } from '@teambit/ui-foundation.ui.react-router.nav-link';
import { CommunityDocs } from './community-docs';

const routing = { Link, NavLink, useLocation };

export const BasicCommunityDocs = ({ test = undefined }: { test?: boolean }) => (
  <RoutingProvider value={routing}>
    <SidebarProvider>
      <ReactRouterRoutingProvider useBrowserRouter={test}>
        <CommunityDocs />
      </ReactRouterRoutingProvider>
    </SidebarProvider>
  </RoutingProvider>
);
