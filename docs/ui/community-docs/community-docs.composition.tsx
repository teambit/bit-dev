import React from 'react';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import {
  ReactRouterRoutingProvider,
  reactRouterAdapter,
} from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { CommunityDocs } from './community-docs';

export const BasicCommunityDocs = () => (
  <ReactRouterRoutingProvider>
    {/* @ts-ignore - TODO remove when sidebar use thew new link components */}
    <RoutingProvider value={reactRouterAdapter}>
      <SidebarProvider>
        <CommunityDocs />
      </SidebarProvider>
    </RoutingProvider>
  </ReactRouterRoutingProvider>
);
