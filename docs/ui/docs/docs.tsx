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

  /**
   * base URL for the docs route.
   */
  baseUrl?: string,

  /**
   * primary links to be presented in the top of the sidebar.
   */
  primaryLinks?: DocsRoute[],

  /**
   * shows a next page box after every page unless specifically set otherwise by the route using the `showNext` property on DocsRoute. 
   */
  showNext?: boolean,
} & Omit<SplitPaneProps, 'children'>;

export function Docs({ routes, showNext = true, baseUrl = '/', ...rest }: DocsProps) {
  const { path } = useRouteMatch();
  const docRoutes = DocsRoutes.from(routes, baseUrl || path);
  const [isSidebarOpen, handleSidebarToggle] = useReducer((x) => !x, true);
  const sidebarOpenness = isSidebarOpen ? Layout.row : Layout.right;
  const routeArray = docRoutes.getRoutes();

  return (
    <SplitPane
      {...rest}
      className={styles.main}
      size={264}
      layout={sidebarOpenness}
    >
      <Pane className={styles.sidebar}>
        <Sidebar
          tree={docRoutes.toSideBarTree()}
          linkPrefix={baseUrl}
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
          {routeArray.map((route, key) => {
            const next = routeArray[key + 1] ? routeArray[key + 1] : undefined;
            return (
              <Route key={key} path={route.absPath}>
                <DocPage nextPage={next} title={route.title}>{route.component}</DocPage>
              </Route>
            );
          })}
        </Switch>
      </Pane>
    </SplitPane>
  );
}
