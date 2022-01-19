import React, { useMemo } from 'react';
import classNames from 'classnames';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar } from '@teambit/docs.blocks.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import { DocsPlugin } from '@teambit/docs.plugins.docs-plugin';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { DocsContext } from './docs-context';
import styles from './docs.module.scss';

export type ContentCategory = {
  /**
   * a title for the content category.
   */
  title?: string;

  /**
   * a routes to be rendered in the content sidebar.
   */
  routes: DocsRoute[];

  /**
   * a className to pass styling to the sidebar.
   */
  className?: string;
};

export type DocsProps = {
  /**
   * an array of routes category.
   */
  contents?: ContentCategory[];

  /**
   * base URL for the docs route.
   */
  baseUrl?: string;

  /**
   * primary links to be presented in the top of the sidebar.
   */
  primaryLinks?: DocsRoute[];

  /**
   * array doc plugins to compose.
   */
  plugins?: DocsPlugin<any, any>[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function Docs({ contents, primaryLinks = [], baseUrl, plugins = [], className, ...rest }: DocsProps) {
  const { path } = useRouteMatch();
  const primaryRoutes = DocsRoutes.from(primaryLinks, baseUrl || path);
  const contentRoutes = contents?.map((category) => {
    return {
      title: category.title,
      routes: DocsRoutes.from(category.routes || [], baseUrl || path),
      className: category.className,
    };
  });

  const routeArray = useMemo(() => {
    const pRoutes = primaryRoutes.getRoutes();
    const cRoutes = contentRoutes?.map((category) => category.routes.getRoutes()) || [];

    return pRoutes.concat(...cRoutes);
  }, [primaryRoutes, contentRoutes]);

  return (
    <DocsContext.Provider
      value={{
        contentRoutes: contentRoutes?.map((category) => category.routes),
        primaryRoutes,
        routes: routeArray,
        plugins,
      }}
    >
      <div {...rest} className={classNames(styles.main, className)}>
        <Sidebar primaryLinks={primaryRoutes.toSideBarTree()} sections={contentRoutes} />
        <div className={styles.content}>
          <Switch>
            {routeArray.map((route, key) => {
              return (
                <Route key={route.absPath} path={route.absPath}>
                  <DocPage index={key} route={route} plugins={plugins}>
                    {route.component}
                  </DocPage>
                </Route>
              );
            })}
            {/* default catch all */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </DocsContext.Provider>
  );
}
