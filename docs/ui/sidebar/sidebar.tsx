import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { TreeNode, TreeNodeContext } from '@teambit/base-ui.graph.tree.recursive-tree';
// TODO: check with Uri why sidebar is distributed to many components and not documented.
import { TreeContextProvider } from '@teambit/base-ui.graph.tree.tree-context';
import { indentStyle } from '@teambit/base-ui.graph.tree.indent';
import { RootNode } from '@teambit/base-ui.graph.tree.root-node';
import { SidebarNode } from './sidebar-node';
import styles from './sidebar.module.scss';

export type SidebarPayload = {
  open?: boolean;
  icon?: string | ReactNode;
  title: string;
  path?: string;
  configPath?: string;
};

export type SidebarTreeNode = TreeNode<SidebarPayload>;

export type SidebarProps = {
  /**
   * an optional title for the sidebar.
   */
  displayTitle?: string;

  /**
   * a nested tree node, which includes children for tree nesting.
   */
  tree: SidebarTreeNode;

  /**
   * prefix for all rendered links in the sidebar.
   */
  linkPrefix?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ displayTitle, tree, linkPrefix, className, ...rest }: SidebarProps) {
  const [active, setToActive] = useState(tree.id);

  return (
    <div style={{ ...indentStyle(1), ...rest.style }} className={classNames(styles.sidebar, className)} {...rest}>
      {displayTitle && <span className={styles.sidebarTitle}>{displayTitle}</span>}
      <TreeNodeContext.Provider value={SidebarNode}>
        <TreeContextProvider onSelect={(id) => setToActive(id)} selected={active}>
          <RootNode node={tree} depth={1} />
        </TreeContextProvider>
      </TreeNodeContext.Provider>
    </div>
  );
}
