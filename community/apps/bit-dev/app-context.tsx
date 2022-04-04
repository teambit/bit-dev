import React, { ReactNode } from 'react';
import UAParser from 'ua-parser-js';
import { GoogleTagManager } from '@teambit/analytics.data.google-tag-manager';
import { GoogleAnalytics } from '@teambit/analytics.data.google-analytics';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { CloudProvider } from '@teambit/cloud.cloud-provider';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { UserAgentProvider } from '@teambit/ui-foundation.ui.hooks.use-user-agent';

// if we will use server side rendering we will be able to inject req.browser.
// otherwise, it will still be robust.
const userAgent = typeof window !== 'undefined' ? new UAParser(window.navigator.userAgent) : undefined;

export function AppContext({ children }: { children?: ReactNode }) {
  return (
    // UserAgentProvider doesn't accept undefined type (even though it handles undefined just fine)
    // https://stackoverflow.com/questions/71548903/react-context-provider-not-allowing-undefined
    <UserAgentProvider value={userAgent!}>
      <GoogleAnalytics trackingId="UA-89811062-3" />
      <GoogleTagManager gtmIds={['GTM-WQX39XS']} />
      <NavigationProvider implementation={reactRouterAdapter}>
        <CloudProvider>
          <ThemeSwitcher defaultTheme="light">
            <CommunityHighlighter>{children}</CommunityHighlighter>
          </ThemeSwitcher>
        </CloudProvider>
      </NavigationProvider>
    </UserAgentProvider>
  );
}
