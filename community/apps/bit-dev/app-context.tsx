import React, { ReactNode } from 'react';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { CloudProvider } from '@teambit/cloud.cloud-provider';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';

export function AppContext({ children }: { children?: ReactNode }) {
  return (
    <NavigationProvider implementation={reactRouterAdapter}>
      <CloudProvider>
        <ThemeSwitcher defaultTheme="light">
          <CommunityHighlighter>{children}</CommunityHighlighter>
        </ThemeSwitcher>
      </CloudProvider>
    </NavigationProvider>
  );
}
