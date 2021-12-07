import { createContext, useContext } from 'react';
import { Route } from '@teambit/docs.entities.docs-routes';

export type DocPageContextProps = {
  /**
   * current route.
   */
  route?: Route;

  /**
   * key of the route.
   */
  index?: number;
};

export const DocPageContext = createContext<DocPageContextProps>({});

export function useDocPage() {
  const docPage = useContext(DocPageContext);
  return docPage;
}
