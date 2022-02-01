import React, { ReactNode } from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { RouterProvider } from '@teambit/base-react.navigation.routing-provider';
// import { DarkTheme } from '@teambit/design.themes.dark-theme';
// rename the below component to teambit.react/react-router/routing-provider.
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';

export function AppContext({ children }: { children?: ReactNode }) {
  // TODO @Uri - remove the legacy RoutingProvider
  return (
    <RouterProvider value={reactRouterAdapter}>
      <ThemeCompositions>
        <CommunityHighlighter>{children}</CommunityHighlighter>
      </ThemeCompositions>
    </RouterProvider>
  );
}
