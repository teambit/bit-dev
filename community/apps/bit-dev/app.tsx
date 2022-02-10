import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Guides } from '@teambit/docs.ui.pages.guides';
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { wideColumn } from '@teambit/base-ui.layout.page-frame';
import { Footer, footerMock } from '@teambit/community.ui.footer.footer';
import { AppContext } from './app-context';

/**
 * Load pages dynamically to enable code splitting.
 */
const Plugins = lazy(() => import('@teambit/community.ui.pages.plugins'));

export function BitDevApp() {
  return (
    <AppContext>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="docs" element={<Navigate replace to="/docs/quick-start" />} />
        <Route path="docs/*" element={<CommunityDocs />} />

        <Route path="/guides" element={<Navigate replace to="/guides/micro-frontends/overview" />} />
        <Route path="/guides/*" element={<Guides className={wideColumn} />} />

        <Route
          path="/plugins"
          element={
            <Suspense fallback={<div />}>
              <Plugins />
            </Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className={wideColumn}>
        <Footer categoryList={footerMock} />
      </div>
      {/* footer component */}
    </AppContext>
  );
}
