import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Guides } from '@teambit/docs.ui.pages.guides';
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { Icon } from '@teambit/design.elements.icon';
import { GithubStars } from '@teambit/community.ui.github-stars';
import { Toggle } from '@teambit/design.ui.input.toggle';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Footer, footerMock } from '@teambit/community.ui.footer.footer';
import { useLocalStorage } from '@teambit/community.ui.hooks.use-local-storage';
import { AppContext } from './app-context';
import styles from './app.module.scss';

/**
 * Load pages dynamically to enable code splitting.
 */
const Plugins = loadable(() => import('@teambit/community.ui.pages.plugins'));

export function BitDevApp() {
  const [highlighting, setHighlighting] = useLocalStorage('highlighting', true);

  function onToggleClick(e) {
    return setHighlighting?.(e.target.checked);
  }

  return (
    <AppContext showHighlighter={highlighting}>
      <Header
        plugins={[
          () => <GithubStars className={styles.githubLink} />,
          () => (
            <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w">
              <Icon of="slack" />
            </ExternalLink>
          ),
          () => (
            <div className={styles.inspect}>
              <span>Inspect</span>
              <Toggle onInputChanged={onToggleClick} checked={highlighting} />
            </div>
          ),
        ]}
      />
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
