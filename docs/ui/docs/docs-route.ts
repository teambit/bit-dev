import { ReactNode } from 'react';

export interface DocsRoute {
  
  /**
   * title for the docs page
   */
  title: string;

  /**
   * path for the doc.
   */
  path: string;

  /**
   * path in the docs navigation. if not specified item will not show up on the sidebar.
   */
  sidebarPath?: string;

  /**
   * component to use for the docs route.
   */
  component: ReactNode
}
