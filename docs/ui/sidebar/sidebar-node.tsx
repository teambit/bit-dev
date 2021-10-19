import React, { /* useState, */ useContext } from 'react';
import { TreeNode, TreeNodeComponentProps } from '@teambit/ui-foundation.ui.tree.tree-node';
import { FolderTreeNode } from '@teambit/ui-foundation.ui.tree.folder-tree-node';
import { TreeContext } from '@teambit/base-ui.graph.tree.tree-context';

export type SidebarNodeProps = {
  /**
   * url for entry icon.
   */
  icon?: string,

  /**
   * name of the active item id
   */
  active?: string,
} & TreeNodeComponentProps<any>;

export function SidebarNode(props: SidebarNodeProps) {
  const isActive = window?.location?.pathname?.includes(props.node.id)
  if (!props.node.children) {
    return (
      // TODO: migrate to use the new base-react link with React Router.
        <TreeNode 
          node={{ id: props.node.payload.title }}
          icon={props.node.payload?.icon}
          depth={props.depth}
          // TODO - navLink should show up as active by itself
          isActive={isActive}
          href={props.node.payload?.path}
      />
    );
  }

  return (
    <FolderTreeNode
      node={{
        id: props.node.payload?.title,
        children: props.node.children,
        payload: {
          ...props.node.payload,
          open: isActive || props.node.payload.open,
        },
      }}
      depth={props.depth}
    />
  );
}
