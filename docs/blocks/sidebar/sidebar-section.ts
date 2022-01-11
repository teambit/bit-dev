import { ReactNode } from 'react';
import { TreeNode } from '@teambit/base-ui.graph.tree.recursive-tree';
import { DocsRoutes } from '@teambit/docs.entities.docs-routes';

export type SidebarTreeNode = TreeNode<SidebarPayload>;

export type SidebarPayload = {
  open?: boolean;
  icon?: string | ReactNode;
  title: string;
  path?: string;
  configPath?: string;
  overviewPath?: string;
  displayInSidebar?: boolean;
};

export type SidebarSection = {
  /**
   * title of the section.
   */
  title?: string;
  
  /**
   * tree of the section.
   */
  // routes: SidebarTreeNode;
  routes?: DocsRoutes;

  /**
   * tree custom styles
   */
  className?: string
};
