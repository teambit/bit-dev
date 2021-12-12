import React, { ReactNode } from 'react';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { LegacyRoutingProvider } from './legacy-routing';

export function AppContext({ children }: { children?: ReactNode }) {
  return (
    <ReactRouterRoutingProvider>
      {/* TODO - remove legacy routing once all links use the base-react links */}
      <LegacyRoutingProvider>
        <SidebarProvider>
          <ThemeCompositions>
            <CommunityHighlighter>{children}</CommunityHighlighter>
          </ThemeCompositions>
        </SidebarProvider>
      </LegacyRoutingProvider>
    </ReactRouterRoutingProvider>
  );
}
