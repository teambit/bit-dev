import React from 'react';
import { DocsTreeNode } from '@teambit/docs.ui.sidebar.docs-tree-node';
import { TreeNode } from './tree-node';
import type { TreeNodeComponentProps } from './tree-node';

export type SidebarNodeProps = {
  /**
   * url for entry icon.
   */
  icon?: string;

  /**
   * name of the active item id
   */
  active?: string;
} & TreeNodeComponentProps<any>;

import { TreeNode as TreeNodeType } from '@teambit/base-ui.graph.tree.recursive-tree';

export type WidgetProps<Payload> = {
  node: TreeNodeType<Payload>;
};

export function SidebarNode(props: SidebarNodeProps) {
  const currentPath = window?.location.pathname;
  const { node, depth } = props;

  if (!node.children) {
    const isNodeActive = currentPath === node.payload.path;
    if (node.payload.displayInSidebar === false) {
      return <div />;
    }
    return (
      // TODO: migrate to use the new base-react link with React Router.
      <TreeNode
        node={{ id: node.payload.title }}
        icon={node.payload?.icon}
        depth={depth}
        // TODO - navLink should show up as active by itself
        isActive={isNodeActive}
        href={node.payload?.path}
      />
    );
  }

  const isFolderActive = currentPath.includes(`/${node.id}/`);
  return (
    <DocsTreeNode
      node={{
        id: node.payload?.title,
        children: node.children,
        payload: {
          ...node.payload,
          open: isFolderActive || node.payload.open,
        },
      }}
      depth={depth}
    />
  );
}
