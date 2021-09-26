import React, { useReducer } from 'react';
import classNames from 'classnames';
import { DocsRoute } from './docs-route';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar } from '@teambit/docs.ui.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import { Collapser } from '@teambit/ui-foundation.ui.buttons.collapser';
import {
  SplitPane,
  SplitPaneProps,
  Pane,
  Layout,
} from '@teambit/base-ui.surfaces.split-pane.split-pane';
import { HoverSplitter } from '@teambit/base-ui.surfaces.split-pane.hover-splitter';
import styles from './docs.module.scss';
import { DocsRoutes } from './routes';

export type DocsProps = {
  /**
   * a text to be rendered in the component.
   */
  routes: DocsRoute[];
} & SplitPaneProps;

export function Docs({ routes, ...rest }: DocsProps) {
  const docRoutes = DocsRoutes.from(routes);
  const [isSidebarOpen, handleSidebarToggle] = useReducer((x) => !x, true);
  const sidebarOpenness = isSidebarOpen ? Layout.row : Layout.right;
  const { path } = useRouteMatch();

  return (
    <SplitPane
      {...rest}
      className={styles.main}
      size={264}
      layout={sidebarOpenness}
    >
      <Pane className={styles.sidebar}>
        <Sidebar
          paths={docRoutes.getSideBarPaths()}
          onSelect={(id) => console.log(id)}
        />
      </Pane>
      <HoverSplitter className={styles.splitter}>
        <Collapser
          isOpen={isSidebarOpen}
          onMouseDown={(e) => e.stopPropagation()} // avoid split-pane drag
          onClick={handleSidebarToggle}
          tooltipContent={`${isSidebarOpen ? "Hide" : "Show"} side panel`}
        />
      </HoverSplitter>
      <Pane className={styles.content}>
        <Switch>
          {routes.map((route, key) => {
            return (
              <Route key={key} path={`${path}/quick-start`}>
                <DocPage title={route.title}>{route.component}</DocPage>
              </Route>
            );
          })}
        </Switch>
      </Pane>
    </SplitPane>
  );
}
