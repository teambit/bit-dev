import React, { ReactNode } from 'react';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { legacyRouting } from './legacy-routing';

export function AppContext({ children }: { children?: ReactNode }) {
  // TODO @Uri - remove the legacy RoutingProvider
  return (
    <RoutingProvider value={legacyRouting}>
      <SidebarProvider>
        <ReactRouterRoutingProvider useBrowserRouter>
          <ThemeCompositions>
            <CommunityHighlighter>{children}</CommunityHighlighter>
          </ThemeCompositions>
        </ReactRouterRoutingProvider>
      </SidebarProvider>
    </RoutingProvider>
  );
}
