import React, { ReactNode } from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';

export function AppContext({ children }: { children?: ReactNode }) {
  return (
    <NavigationProvider implementation={reactRouterAdapter}>
      <ThemeCompositions>
        <CommunityHighlighter>{children}</CommunityHighlighter>
      </ThemeCompositions>
    </NavigationProvider>
  );
}
