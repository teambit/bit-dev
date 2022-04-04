import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { excludeHighlighterAtt } from '@teambit/react.ui.component-highlighter';
import { GoogleTagManager } from '@teambit/analytics.data.google-tag-manager';
import { GoogleAnalytics } from '@teambit/analytics.data.google-analytics';
import { Guides } from '@teambit/docs.ui.pages.guides';
import { Header } from '@teambit/community.ui.header.header';
import { StickyBanner } from '@teambit/community.ui.sticky-banner';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { wideColumn, centerColumn } from '@teambit/base-ui.layout.page-frame';
import { Footer, footerMock } from '@teambit/community.ui.footer.footer';
import { AppContext } from './app-context';

/**
 * Loads pages dynamically to enable code splitting.
 */
const Plugins = lazy(() => import('@teambit/community.ui.pages.plugins'));

export function BitDevApp() {
  return (
    <AppContext>
      <GoogleAnalytics trackingId="UA-89811062-3" />
      <GoogleTagManager gtmIds={['GTM-WQX39XS']} />
      <StickyBanner {...excludeHighlighterAtt} />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="docs" element={<Navigate replace to="/docs/quick-start" />} />
        <Route path="docs/*" element={<CommunityDocs className={wideColumn} />} />

        <Route path="/guides" element={<Navigate replace to="/guides/micro-frontends/overview" />} />
        <Route path="/guides/*" element={<Guides className={wideColumn} />} />

        <Route
          path="/aspects"
          element={
            <Suspense fallback={<div />}>
              <Plugins />
            </Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer className={centerColumn} categoryList={footerMock} />
    </AppContext>
  );
}
