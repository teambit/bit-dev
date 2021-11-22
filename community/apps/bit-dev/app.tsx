import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Guides } from '@teambit/docs.ui.pages.guides';
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Footer, footerMock } from '@teambit/community.ui.footer.footer';
import { useLocalStorage } from '@teambit/community.ui.hooks.use-local-storage';
import { AppContext } from './app-context';

/**
 * Load pages dynamically to enable code splitting.
 */
// const Plugins = React.lazy(() => import('@teambit/community.ui.pages.plugins'));

// Plugins.load().then((res) => {
//   console.log('loaded!!!');
//   return res;
// });

const Plugins = React.lazy(() => import('@teambit/community.ui.pages.plugins'));

export function BitDevApp() {
  const [highlighting, setHighlighting] = useLocalStorage('highlighting', true);

  return (
    <AppContext showHighlighter={highlighting}>
      <Header highlighting={highlighting} setHighlighting={setHighlighting} />
      <Switch>
        <Redirect exact from="/docs" to="/docs/quick-start" />
        <Route path="/docs">
          <WideColumn>
            <Suspense fallback={<div>loading...</div>}>
              <CommunityDocs />
            </Suspense>
          </WideColumn>
        </Route>

        <Redirect exact from="/guides" to="/guides/micro-frontends/overview" />
        <Route path="/guides">
          <WideColumn>
            <Guides />
          </WideColumn>
        </Route>
        <Route exact path="/plugins">
          <Suspense fallback={<div>loading...</div>}>
            <Plugins />
          </Suspense>
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
