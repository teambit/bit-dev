import React, { Suspense, createRef } from "react";
import classnames from "classnames";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "@loadable/component";
import { excludeHighlighterAtt } from "@teambit/react.ui.component-highlighter";
import { Header } from "@teambit/community.ui.header.header";
import { StickyBanner } from "@teambit/community.ui.sticky-banner";
import { Homepage } from "@teambit/community.ui.pages.homepage";
import { NotFound } from "@teambit/community.ui.pages.errors.not-found";
import { CommunityDocs, totalRoutes } from "@teambit/docs.ui.community-docs";
import { wideColumn, centerColumn } from "@teambit/base-ui.layout.page-frame";
import { CommandsProvider } from "@teambit/community.ui.bit-cli.commands-provider";
import commands from "@teambit/harmony.content.cli-reference/dist/cli-reference.json";
import { Footer, footerMock } from "@teambit/community.ui.footer.footer";
import { AppContext } from "./app-context";
import { CommandBar } from "./command-bar";
import { ScrollToTop } from "./scroll-to-top";

import styles from "./app.module.scss";
import layout from "./layout.module.scss";

/**
 * Load pages dynamically to enable code splitting.
 */
const Plugins = lazy(() => import("@teambit/community.ui.pages.plugins"));
const headerWidgets = [<CommandBar key="command-bar" routes={totalRoutes} />];

export function BitDevApp() {
  const ref = createRef<HTMLDivElement>();

  return (
    <AppContext>
      <CommandsProvider rawCommands={commands}>
        <div className={classnames(styles.app, layout.container)}>
          <StickyBanner className={layout.sticky} {...excludeHighlighterAtt} />
          <Header className={layout.sticky} plugins={headerWidgets} />

          <ScrollToTop target={ref} />
          <div className={layout.stretch}>
            <div className={layout.scrollContainer} ref={ref}>
              <Pages />
              <Footer className={centerColumn} categoryList={footerMock} />
            </div>
          </div>
        </div>
      </CommandsProvider>
    </AppContext>
  );
}

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="docs"
        element={<Navigate replace to="/docs/quick-start" />}
      />
      <Route path="docs/*" element={<CommunityDocs className={wideColumn} />} />

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
  );
}
