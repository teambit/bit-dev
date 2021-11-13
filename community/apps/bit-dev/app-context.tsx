import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ComponentHighlighter } from '@teambit/react.ui.component-highlighter';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { legacyRouting } from './legacy-routing';
import styles from './app.module.scss';

export function AppContext({ children, showHighlighter }: { children?: ReactNode; showHighlighter?: boolean }) {
  // TODO: @kutner - remove the legacy RoutingProvider
  return (
    <BrowserRouter>
      <RoutingProvider value={legacyRouting}>
        <SidebarProvider>
          <ReactRouterRoutingProvider useBrowserRouter>
            <ThemeCompositions>
              <ComponentHighlighter
                classes={{ label: styles.label, frame: styles.frame }}
                placement="top"
                style={{ border: 'none' }}
                disabled={!showHighlighter}
              >
                {children}
              </ComponentHighlighter>
            </ThemeCompositions>
          </ReactRouterRoutingProvider>
        </SidebarProvider>
      </RoutingProvider>
    </BrowserRouter>
  );
}
