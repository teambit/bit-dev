import React, { ReactNode } from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { RouterProvider } from '@teambit/community.ui.router.router-provider';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';

export function AppContext({ children }: { children?: ReactNode }) {
  // TODO @Uri - remove the legacy RoutingProvider
  return (
    <RouterProvider>
      <ThemeCompositions>
        <CommunityHighlighter>{children}</CommunityHighlighter>
      </ThemeCompositions>
    </RouterProvider>
  );
}
