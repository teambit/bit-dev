import React from 'react';
import { TreeNode, TreeNodeComponentProps } from '@teambit/ui-foundation.ui.tree.tree-node';
import { DocsTreeNode } from '@teambit/docs.ui.docs-tree-node';

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

export function SidebarNode(props: SidebarNodeProps) {
  const currentPath = location?.pathname;
  const { node, depth } = props;

  if (!node.children) {
    const isNodeActive = currentPath === node.payload.path;
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
