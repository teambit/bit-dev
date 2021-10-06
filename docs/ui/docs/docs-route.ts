import { ReactNode } from 'react';

export interface DocsRoute {
  
  /**
   * title for the docs page
   */
  title: string;

  /**
   * path for the doc in the context.
   */
  path: string;

  /**
   * icon of the item. applies on categories and items.
   */
  icon?: string;

  /**
   * determines whether category should be collapsed or not.
   */
  collapsed?: boolean;

  /**
   * whether to show the doc in the sidebar. default to true.
   */
  displayInSidebar?: boolean;

  /**
   * doc routes to be nested in the current route. default to [].
   */
  children?: DocsRoute[];

  /**
   * component to use for the docs route.
   */
  component?: ReactNode
}
