import React, { useState } from 'react';
import { TreeNode, WidgetProps } from '@teambit/ui-foundation.ui.tree.tree-node';
import { FolderTreeNode } from '@teambit/ui-foundation.ui.tree.folder-tree-node';

export type SidebarNodeProps = {
  /**
   * url for entry icon.
   */
  icon?: string,

  /**
   * name of the active item id
   */
  active?: string
} & WidgetProps<any>;

export function SidebarNode(props: SidebarNodeProps) {
  const [active, setToActive] = useState(props.active);

  if (!props.node.children) {
    return (
      <TreeNode 
        node={{ id: props.node.id }}
        icon={props.icon || ''}
        depth={1}
        onClick={() => setToActive(props.node.id)}
        isActive={props.node.id === active}
        href={props.node.payload?.path}
    />
    );
  }

  // TODO: figure out why use any here with uri
  return <FolderTreeNode {...props as any} />
}
