import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.navigation.react-router.link';
import { RouterContextProvider } from '@teambit/base-react.navigation.router-context';
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentHighlighter } from '@teambit/react.ui.component-highlighter';
import { Plugins } from '@teambit/community.ui.pages.plugins';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { legacyRouting } from './legacy-routing';

export function BitDevApp() {
  return (
    <RoutingProvider value={legacyRouting}>
      <RouterContextProvider Link={Link}>
        <ThemeCompositions>
          <ComponentHighlighter>
            <BrowserRouter>
              {/* header component */}
              <Header />
              <Switch>
                <Route path="/docs">
                  <WideColumn>
                    <CommunityDocs />
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
              {/* footer component */}
            </BrowserRouter>
          </ComponentHighlighter>
        </ThemeCompositions>
      </RouterContextProvider>
    </RoutingProvider>
  );
}
