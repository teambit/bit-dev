import React, { useMemo } from 'react';
import classNames from 'classnames';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '@teambit/docs.blocks.sidebar';
import { ExcludeHighlighter } from '@teambit/react.ui.component-highlighter';
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

  /**
   * override styles for content section of page
   */
  contentClass?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function Docs({ contents, primaryLinks = [], baseUrl, plugins = [], className, contentClass, ...rest }: DocsProps) {
  const primaryRoutes = DocsRoutes.from(primaryLinks, baseUrl);
  const contentRoutes = contents?.map((category) => {
    return {
      title: category.title,
      routes: DocsRoutes.from(category.routes || [], baseUrl),
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
        <ExcludeHighlighter>
          <Sidebar primaryLinks={primaryRoutes.toSideBarTree()} sections={contentRoutes} />
        </ExcludeHighlighter>
        <div className={styles.content}>
          <Routes>
            {routeArray.map((route, key) => {
              return (
                <Route
                  key={route.absPath}
                  path={route.path}
                  element={
                    <DocPage index={key} route={route} plugins={plugins}>
                      {route.component}
                    </DocPage>
                  }
                />
              );
            })}
            {/* default catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </DocsContext.Provider>
  );
}
