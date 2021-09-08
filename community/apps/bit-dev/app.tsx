import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '@teambit/community.ui.header';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Plugins } from '@teambit/community.ui.pages.plugins';

export function BitDevApp() {
  return (
    <ThemeContext>
      <BrowserRouter>
        {/* header component */}
        <Header />
        <Switch>
          <WideColumn>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/plugins">
              <Plugins />
            </Route>
            <Route path="/about">{/* about page component */}</Route>
          </WideColumn>
        </Switch>
        {/* footer component */}
      </BrowserRouter>
    </ThemeContext>
  );
}
