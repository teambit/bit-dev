import React, { useMemo, ReactNode } from 'react';
import classNames from 'classnames';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar as Tree } from '@teambit/docs.ui.sidebar.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import { useSidebar } from '@teambit/design.ui.sidebar.sidebar-context';
import { Sidebar } from '@teambit/design.ui.sidebar.sidebar';
import styles from './docs.module.scss';
import { PrimaryLinks } from './primary-links';
import { DocsPlugin } from './docs-plugin';

export type CategoryRoutes = {
  /**
   * a title for the category.
   */
  title: string;

  /**
   * a routes to be rendered in the sidebar.
   */
  routes: DocsRoute[];

  /**
   * a className to pass styling to the sidebar.
   */
  className?: string;
};

export type DocsProps = {
  /**
   * a routes to be rendered in the sidebar.
   */
  routes?: DocsRoute[];

  /**
   * an array of routes category.
   */
  routesCategories?: CategoryRoutes[];

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
   * array doc plugins to compose.
   */
  plugins?: DocsPlugin[];

  /**
   * shows a next page box after every page unless specifically set otherwise by the route using the `showNext` property on DocsRoute.
   */
  showNext?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function Docs({
  routes = [],
  routesCategories,
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
  const docsRoutesCategories = routesCategories?.map((category) => {
    return {
      title: category.title,
      routes: DocsRoutes.from(category.routes || [], baseUrl || path),
      className: category.className,
    };
  });

  const routeArray = useMemo(() => {
    const memoArray = [...primaryRoutes.getRoutes(), ...docRoutes.getRoutes()];
    if (docsRoutesCategories) {
      docsRoutesCategories.forEach((category) => memoArray.push(...category.routes.getRoutes()));
    }
    return memoArray;
  }, [primaryRoutes, docRoutes, docsRoutesCategories]);

  return (
    <div {...rest} className={classNames(styles.main, className)}>
      <Sidebar isOpen={sidebar.isOpen} toggle={sidebar.setIsOpen}>
        <PrimaryLinks tree={primaryRoutes.toSideBarTree()} />
        <Tree tree={docRoutes.toSideBarTree()} linkPrefix={baseUrl} />
        {docsRoutesCategories?.map((category) => (
          <Tree
            key={category.title}
            displayTitle={category.title}
            tree={category.routes.toSideBarTree()}
            linkPrefix={baseUrl}
            className={category.className}
          />
        ))}
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
