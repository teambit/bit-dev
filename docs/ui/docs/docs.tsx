import React, { useMemo } from 'react';
import classNames from 'classnames';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { Routes, Route } from 'react-router-dom';
import { Sidebar as Tree } from '@teambit/docs.ui.sidebar.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import { useSidebar } from '@teambit/design.ui.sidebar.sidebar-context';
import { Sidebar } from '@teambit/design.ui.sidebar.sidebar';
import { DocsPlugin } from '@teambit/docs.plugins.docs-plugin';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import styles from './docs.module.scss';
import { PrimaryLinks } from './primary-links';
import { DocsContext } from './docs-context';

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
  const sidebar = useSidebar();
  const primaryRoutes = DocsRoutes.from(primaryLinks);
  const contentRoutes = contents?.map((category) => {
    return {
      title: category.title,
      routes: DocsRoutes.from(category.routes || []),
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
        <Sidebar isOpen={sidebar.isOpen} toggle={sidebar.setIsOpen}>
          <PrimaryLinks tree={primaryRoutes.toSideBarTree(baseUrl)} />
          {contentRoutes?.map((category, idx) => (
            <Tree
              key={category.title || idx}
              displayTitle={category.title}
              tree={category.routes.toSideBarTree(baseUrl)}
              className={category.className}
            />
          ))}
        </Sidebar>

        <div className={styles.content}>
          <Routes>
            {routeArray.map((route, key) => {
              return (
                <Route
                  key={route.absPath}
                  path={route.absPath}
                  element={
                    <DocPage index={key} route={route} plugins={plugins}>
                      {route.component}
                    </DocPage>
                  }
                />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </DocsContext.Provider>
  );
}
