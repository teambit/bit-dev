import React, { useMemo, ReactNode } from 'react';
import classNames from 'classnames';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar as Tree } from '@teambit/docs.ui.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import { useSidebar } from '@teambit/design.ui.sidebar.sidebar-context';
import { Sidebar } from '@teambit/design.ui.sidebar.sidebar';
import styles from './docs.module.scss';
import { PrimaryLinks } from './primary-links';

export type DocsProps = {
  /**
   * a routes to be rendered in the sidebar.
   */
  routes?: DocsRoute[];

  /**
   * getting started routes to be rendered in the sidebar.
   */
  gettingStartedRoutes?: DocsRoute[];

  /**
   * learn routes to be rendered in the sidebar.
   */
  learndRoutes?: DocsRoute[];

  /**
   * base URL for the docs route.
   */
  baseUrl?: string;

  /**
   * primary links to be presented in the top of the sidebar.
   */
  primaryLinks?: DocsRoute[];

  /**
   * Component to render for doc contribution instructions.
   */
  contribution?: ReactNode;

  /**
   * shows a next page box after every page unless specifically set otherwise by the route using the `showNext` property on DocsRoute.
   */
  showNext?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function Docs({
  routes = [],
  gettingStartedRoutes = [],
  learndRoutes = [],
  primaryLinks = [],
  showNext = true,
  baseUrl = '/',
  contribution,
  className,
  ...rest
}: DocsProps) {
  const { path } = useRouteMatch();
  const sidebar = useSidebar();
  const primaryRoutes = DocsRoutes.from(primaryLinks, baseUrl || path);
  const docRoutes = DocsRoutes.from(routes, baseUrl || path);
  const gettingStartedDocRoutes = DocsRoutes.from(gettingStartedRoutes, baseUrl || path);
  const learndDocRoutes = DocsRoutes.from(learndRoutes, baseUrl || path);

  const routeArray = useMemo(
    () => [
      ...primaryRoutes.getRoutes(),
      ...docRoutes.getRoutes(),
      ...gettingStartedDocRoutes.getRoutes(),
      ...learndDocRoutes.getRoutes(),
    ],
    [primaryRoutes, docRoutes, gettingStartedDocRoutes, learndDocRoutes]
  );

  return (
    <div {...rest} className={classNames(styles.main, className)}>
      <Sidebar isOpen={sidebar.isOpen} toggle={sidebar.setIsOpen}>
        <PrimaryLinks tree={primaryRoutes.toSideBarTree()} />
        <Tree tree={docRoutes.toSideBarTree()} linkPrefix={baseUrl} />
        <Tree displayTitle="GETTING STARTED" tree={gettingStartedDocRoutes.toSideBarTree()} linkPrefix={baseUrl} />
        <Tree displayTitle="LEARN" tree={learndDocRoutes.toSideBarTree()} linkPrefix={baseUrl} />
      </Sidebar>
      <div className={styles.content}>
        <Switch>
          {contribution ? <Route>{contribution}</Route> : ''}
          {routeArray.map((route, key) => {
            const next = routeArray[key + 1] ? routeArray[key + 1] : undefined;
            return (
              <Route key={route.title} path={route.absPath}>
                <DocPage
                  nextPage={showNext ? next : undefined}
                  title={route.title}
                  description={route.description}
                  baseUrl={baseUrl}
                >
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
