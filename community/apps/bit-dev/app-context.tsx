import React, { ReactNode } from 'react';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { legacyRouting } from './legacy-routing';

export function AppContext({ children }: { children?: ReactNode }) {
  return (
    <ReactRouterRoutingProvider>
      {/* TODO - replace with Legacy Routing Adapter, and remove once we remove all legacy links */}
      <RoutingProvider value={legacyRouting}>
        <SidebarProvider>
          <ThemeCompositions>
            <CommunityHighlighter>{children}</CommunityHighlighter>
          </ThemeCompositions>
        </SidebarProvider>
      </RoutingProvider>
    </ReactRouterRoutingProvider>
  );
}
