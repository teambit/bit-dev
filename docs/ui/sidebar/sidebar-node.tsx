import React from 'react';
import { TreeNode, TreeNodeComponentProps } from '@teambit/ui-foundation.ui.tree.tree-node';
import { DocsTreeNode } from '@teambit/docs.ui.docs-tree-node';

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
  const currentPath = location?.pathname;
  
  if (!props.node.children) {
    const isNodeActive = currentPath === props.node.payload.path
    return (
      // TODO: migrate to use the new base-react link with React Router.
      <TreeNode 
      node={{ id: props.node.payload.title }}
      icon={props.node.payload?.icon}
      depth={props.depth}
      // TODO - navLink should show up as active by itself
      isActive={isNodeActive}
      href={props.node.payload?.path}
      />
      );
    }

  const isFolderActive = currentPath.includes(`/${props.node.id}/`)
  return (
    <DocsTreeNode
      node={{
        id: props.node.payload?.title,
        children: props.node.children,
        payload: {
          ...props.node.payload,
          open: isFolderActive || props.node.payload.open,
        },
      }}
      depth={props.depth}
    />
  );
}
