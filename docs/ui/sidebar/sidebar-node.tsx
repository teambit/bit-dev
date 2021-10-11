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
  const { onSelect, selected } = useContext(TreeContext);

  if (!props.node.children) {
    return (
      // TODO: migrate to use the new base-react link with React Router.
        <TreeNode 
          node={{ id: props.node.payload.title }}
          icon={props.icon || ''}
          depth={1}
          // icon={props.node.payload?.icon || ''}
          // depth={props.depth}
          // TODO - navLink should show up as active by itself
          // active/set active is not needed
          onClick={onSelect && (() => onSelect(props.node.id))}
          isActive={props.node.id === selected}
          href={props.node.payload?.path}
      />
    );
  }

  // TODO: figure out why use any here with uri
  return <FolderTreeNode node={{ id: props.node.payload?.title, children: props.node.children, payload: props.node.payload  }} depth={props.depth} />
}
