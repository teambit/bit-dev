import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DarkTheme } from '@teambit/design.themes.dark-theme';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { ThemeSwitcher } from '@teambit/design.ui.theme.theme-toggler';
import { Header } from '@teambit/wiki.blocks.header';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Footer } from '@teambit/wiki.blocks.footer';
import { Wiki } from '@teambit/wiki.sections.wiki';

export function WikiApp() {
  return (
    <ThemeSwitcher defaultTheme="dark">
      <CommunityHighlighter>
        {/* header component */}
        <Header />
        <WideColumn>
          <Switch>
            <Route path="/">
              <Wiki />
              {/* home page component */}
            </Route>
          </Switch>
          <Footer />
        </WideColumn>
        {/* footer component */}
      </CommunityHighlighter>
    </ThemeSwitcher>
  );
}
