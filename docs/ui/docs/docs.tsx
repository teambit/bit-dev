import React, { useMemo, useContext } from 'react';
import classNames from 'classnames';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar as Tree, SidebarTreeNode } from '@teambit/docs.ui.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import { UseSidebarContext } from '@teambit/community.ui.context.use-sidebar';
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
   * Component to render for doc contribution instructions.
   */
  contribution?: ReactNode,

  /**
   * shows a next page box after every page unless specifically set otherwise by the route using the `showNext` property on DocsRoute.
   */
  showNext?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function Docs({ routes, primaryLinks = [], showNext = true, baseUrl = '/', contribution, ...rest }: DocsProps) {
  const { path } = useRouteMatch();
  const sidebarContext = useContext(UseSidebarContext);
  const docRoutes = DocsRoutes.from(routes, baseUrl || path);
  const primaryRoutes = DocsRoutes.from(primaryLinks, baseUrl || path);

  const routeArray = useMemo(
    () => [...primaryRoutes.getRoutes(), ...docRoutes.getRoutes()],
    [primaryRoutes, docRoutes]
  );

  return (
    <div {...rest} className={classNames(styles.main, className)}>
      <Sidebar
        primaryRoutes={primaryRoutes.toSideBarTree()}
        docRoutes={docRoutes.toSideBarTree()}
        isOpen={sidebarContext.isOpen}
        toggle={sidebarContext.setIsOpen}
        baseUrl={baseUrl}
      />
      <div className={styles.content}>
        <Switch>
        {contribution ? 
            <Route>
              {contribution}
            </Route>
          : ''
        }
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

// TODO - find a proper name for this and move to separate component. ui/sidebar is taken
export type SidebarProps = {
  toggle?: () => void;
  isOpen?: boolean;
  baseUrl?: string;
  primaryRoutes: SidebarTreeNode;
  docRoutes: SidebarTreeNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

function Sidebar({ toggle, isOpen, baseUrl, primaryRoutes, docRoutes, className, ...rest }: SidebarProps) {
  return (
    <div {...rest} className={classNames(styles.sidebar, isOpen && styles.open, className)}>
      <div className={styles.overlay} onClick={toggle} role="none" />
      <div className={classNames(styles.sidebarContent, !isOpen && styles.closed)}>
        <PrimaryLinks tree={primaryRoutes} />
        <Tree tree={docRoutes} linkPrefix={baseUrl} />
      </div>
    </div>
  );
}
