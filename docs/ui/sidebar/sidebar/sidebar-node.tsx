import React from 'react';
import { TreeNode, TreeNodeComponentProps } from '@teambit/ui-foundation.ui.tree.tree-node';
import { DocsTreeNode } from '@teambit/docs.ui.sidebar.docs-tree-node';

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
  const { node, depth } = props;

  if (!node.children) {
    if (node.payload.displayInSidebar === false) {
      return <div />; // todo - allow null in tree node
    }
    return (
      // TODO: migrate to use the new base-react link with React Router.
      <TreeNode
        node={{ id: node.payload.title }}
        icon={node.payload?.icon}
        depth={depth}
        // TODO - update TreeNode to fix activity, when this is merged -> https://github.com/teambit/bit/pull/5152
        // isActive={isNodeActive}
        href={node.payload?.path}
      />
    );
  }

  return <DocsTreeNode node={node} depth={depth} />;
}
