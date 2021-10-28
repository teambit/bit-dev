import React, { useMemo } from 'react';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar } from '@teambit/docs.ui.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import styles from './docs.module.scss';
import { PrimaryLinks } from './primary-links';

export type DocsProps = {
  /**
   * a routes to be rendered in the sidebar.
   */
  routes: DocsRoute[];

  /**
   * base URL for the docs route.
   */
  baseUrl?: string;

  /**
   * primary links to be presented in the top of the sidebar.
   */
  primaryLinks?: DocsRoute[];

  /**
   * shows a next page box after every page unless specifically set otherwise by the route using the `showNext` property on DocsRoute.
   */
  showNext?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function Docs({ routes, primaryLinks = [], showNext = true, baseUrl = '/', ...rest }: DocsProps) {
  const { path } = useRouteMatch();
  const docRoutes = DocsRoutes.from(routes, baseUrl || path);
  const primaryRoutes = DocsRoutes.from(primaryLinks, baseUrl || path);

  const routeArray = useMemo(
    () => [...primaryRoutes.getRoutes(), ...docRoutes.getRoutes()],
    [primaryRoutes, docRoutes]
  );

  return (
    <div {...rest} className={styles.main}>
      <div className={styles.sidebar}>
        <PrimaryLinks tree={primaryRoutes.toSideBarTree()} />
        <Sidebar tree={docRoutes.toSideBarTree()} linkPrefix={baseUrl} />
      </div>
      <div className={styles.content}>
        <Switch>
          {routeArray.map((route, key) => {
            const next = routeArray[key + 1] ? routeArray[key + 1] : undefined;
            return (
              <Route key={key} path={route.absPath}>
                <DocPage nextPage={next} title={route.title}>
                  {route.component}
                </DocPage>
              </Route>
            );
          })}
        </Switch>
      </div>
    </div>
  );
}
