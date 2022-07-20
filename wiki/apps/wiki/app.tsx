import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
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
          <Routes>
            <Route path="/*" element={<Wiki />} />
          </Routes>
          <Footer />
        </WideColumn>
        {/* footer component */}
      </CommunityHighlighter>
    </ThemeSwitcher>
  );
}
