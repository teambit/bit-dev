import React from 'react';
import { DocsTreeNode } from '@teambit/docs.ui.sidebar.docs-tree-node';
import type { TreeNode as TreeNodeType } from '@teambit/base-ui.graph.tree.recursive-tree';
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

export type WidgetProps<Payload> = {
  node: TreeNodeType<Payload>;
};

export function SidebarNode(props: SidebarNodeProps) {
  const { node, depth } = props;

  if (!node.children) {
    if (node.payload.displayInSidebar === false) {
      return <div />; // todo - allow null in tree node
    }
    return (
      // TODO: migrate to use the new base-react link with React Router.
      <TreeNode node={{ id: node.payload.title }} icon={node.payload?.icon} depth={depth} href={node.payload?.path} />
    );
  }

  return <DocsTreeNode node={node} depth={depth} />;
}
