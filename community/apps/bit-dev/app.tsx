import React, { useState } from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import { Guides } from '@teambit/docs.ui.pages.guides';
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Footer, footerMock } from '@teambit/community.ui.footer.footer';
import { AppContext } from './app-context';

/**
 * Load pages dynamically to enable code splitting.
 */
const Plugins = loadable(() => import('@teambit/community.ui.pages.plugins'));

export function BitDevApp() {
  const [highlighting, setHighlighting] = useState(true);

  return (
    <AppContext showHighlighter={highlighting}>
      <Header highlighting={highlighting} setHighlighting={setHighlighting} />
      <Switch>
        <Route path="/docs">
          <WideColumn>
            <CommunityDocs />
          </WideColumn>
        </Route>

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
