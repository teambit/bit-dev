import React from 'react';
import classNames from 'classnames';
import { DocsRoute } from './docs-route';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar } from '@teambit/docs.ui.sidebar';
import { DocPage } from '@teambit/docs.ui.pages.doc-page';
import styles from './docs.module.scss';
import { DocsRoutes } from './routes';

export type DocsProps = {
  /**
   * a text to be rendered in the component.
   */
  routes: DocsRoute[]
} & React.HTMLAttributes<HTMLDivElement>;

export function Docs({ routes, ...rest }: DocsProps) {
  const docRoutes = DocsRoutes.from(routes);
  const { path } = useRouteMatch();

  return (
    <div className={classNames(styles.docs)} {...rest}>
      <Sidebar 
        className={styles.sidebar} 
        paths={docRoutes.getSideBarPaths()} 
        onSelect={(id) => console.log(id)}
      />
      <div className={styles.content}>
        <Switch>
          {routes.map((route, key) => {
            return <Route key={key} path={`${path}/quick-start`}>
              <DocPage title={route.title}>
                {route.component}
              </DocPage>
            </Route>            
          })}
        </Switch>
      </div>
    </div>
  );
}
