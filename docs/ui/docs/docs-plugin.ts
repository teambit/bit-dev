import { ComponentType } from 'react';
import { Route } from '@teambit/docs.entities.docs-routes';

export interface DocsPlugin<T> {
  /**
   * add plugins to the doc page.
   */
  page: {
    /**
     * add plugin to the bottom section of the doc page.
     */
    bottom?: ComponentType<T>[];

    /**
     * add plugin to the right section of the doc page.
     */
    right?: ComponentType<T>[];
  };

  /**
   * allows to process content provided to the docs section.
   */
  enrichContent(currentRoute: Route, routes: Route[], key: number): T;
}
