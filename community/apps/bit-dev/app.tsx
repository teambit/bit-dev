import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.navigation.react-router.link'
import { RouterContextProvider } from "@teambit/base-react.navigation.router-context";
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentHighlighter } from '@teambit/react.ui.component-highlighter';
import { Plugins } from '@teambit/community.ui.pages.plugins';

export function BitDevApp() {
  return (
    <RouterContextProvider Link={Link}>
      <ThemeCompositions>
        {/* <ComponentHighlighter> */}
          <BrowserRouter>
            {/* header component */}
            <Header />
              <Switch>
                <Route exact path="/plugins">
                  <Plugins />
                </Route>
                <Route path="/about">{/* about page component */}</Route>
                <Route path="/">
                  <Homepage />
                </Route>
              </Switch>
            {/* footer component */}
          </BrowserRouter>
        {/* </ComponentHighlighter> */}
      </ThemeCompositions>
    </RouterContextProvider>
  );
}
