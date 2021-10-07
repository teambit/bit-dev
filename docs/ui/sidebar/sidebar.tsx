import React, { useMemo } from 'react';
import classNames from 'classnames';
import { TreeNode } from '@teambit/base-ui.graph.tree.recursive-tree';
// TODO: check with Uri why sidebar is distributed to many components and not documented.
import { TreeContextProvider } from '@teambit/base-ui.graph.tree.tree-context';
import { indentStyle } from '@teambit/base-ui.graph.tree.indent';
import { RootNode } from '@teambit/base-ui.graph.tree.root-node';
import { TreeNodeContext } from '@teambit/base-ui.graph.tree.recursive-tree';
import { SidebarNode } from './sidebar-node';

export type SidebarPayload = {
  collapsed?: boolean;
  icon?: string;
  title: string;
  path?: string;
};

export type SidebarNode = TreeNode<SidebarPayload>;

export type SidebarProps = {
  /**
   * a text to be rendered in the component.
   */
  onSelect?: (id: string) => void,

  selected?: string,

  /**
   * a nested tree node, which includes children for tree nesting..
   */
  tree: SidebarNode,

  /**
   * prefix for all rendered links in the sidebar.
   */
  linkPrefix?: string

} & React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ onSelect, tree, linkPrefix, selected, className, ...rest }: SidebarProps) {
  return (
    <div style={{ ...indentStyle(1), ...rest.style }} className={classNames(className)} {...rest}>
      <TreeNodeContext.Provider value={SidebarNode}>
        <TreeContextProvider onSelect={onSelect} selected={selected}>
          <RootNode node={tree} depth={0} />
        </TreeContextProvider>
      </TreeNodeContext.Provider>
    </div>
  );
}
