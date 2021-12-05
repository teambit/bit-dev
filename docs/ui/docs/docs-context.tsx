import { useContext, createContext } from 'react';
import { Route, DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { DocsPlugin } from '@teambit/docs.plugins.docs-plugin';

export type DocsContextProps = {
  /**
   * all routes registered to docs section.
   */
  routes: Route[];

  /**
   * primary routes displayed in sidebar.
   */
  primaryRoutes?: DocsRoutes;

  plugins: DocsPlugin[];

  /**
   * all content routes.
   */
  contentRoutes?: DocsRoutes[];
};

export const DocsContext = createContext<DocsContextProps>({
  contentRoutes: [],
  routes: [],
  plugins: [],
});

/**
 * use the docs context
 */
export function useDocs() {
  const docs = useContext(DocsContext);
  return docs;
}
