import React from 'react';
import type { TreeNode as TreeNodeType } from '@teambit/base-ui.graph.tree.recursive-tree';
import { DocsTreeNode } from '../docs-tree-node';
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
      return <div />;
    }
    return (
      <TreeNode node={{ id: node.payload.title }} icon={node.payload?.icon} depth={depth} href={node.payload?.path} />
    );
  }

  return <DocsTreeNode node={node} depth={depth} />;
}
