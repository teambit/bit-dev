import React, { ReactNode } from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ReactRouterRoutingProvider } from '@teambit/ui-foundation.ui.navigation.react-router.routing-adapter';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';

import { Guides } from '@teambit/docs.ui.pages.guides';
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentHighlighter } from '@teambit/react.ui.component-highlighter';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { Footer, footerMock } from '@teambit/community.ui.footer.footer';
import { useLocalStorage } from '@teambit/community.ui.hooks.use-local-storage';

import { legacyRouting } from './legacy-routing';
import styles from './app.module.scss';

/**
 * Load pages dynamically to enable code splitting.
 */
const Plugins = loadable(() => import('@teambit/community.ui.pages.plugins'));

export function BitDevApp() {
  const [highlighting, setHighlighting] = useLocalStorage('highlighting', true);

  return (
    <AppContext showHighlighter={highlighting}>
      <Header highlighting={highlighting} setHighlighting={setHighlighting} />
      <Switch>
        <Redirect exact from="/docs" to="/docs/quick-start" />
        <Route path="/docs">
          <WideColumn>
            <CommunityDocs />
          </WideColumn>
        </Route>

        <Redirect exact from="/guides" to="/guides/micro-frontends/overview" />
        <Route path="/guides">
          <WideColumn>
            <Guides />
          </WideColumn>
        </Route>
        <Route exact path="/plugins">
          <Plugins />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <WideColumn>
        <Footer categoryList={footerMock} />
      </WideColumn>
      {/* footer component */}
    </AppContext>
  );
}

function AppContext({ children, showHighlighter }: { children?: ReactNode; showHighlighter?: boolean }) {
  // TODO @Uri - remove the legacy RoutingProvider
  return (
    <RoutingProvider value={legacyRouting}>
      <SidebarProvider>
        <ReactRouterRoutingProvider useBrowserRouter>
          <ThemeCompositions className={styles.app}>
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
  );
}
