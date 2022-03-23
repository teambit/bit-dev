import React, { useState } from 'react';
import classNames from 'classnames';
import { TreeNodeContext } from '@teambit/base-ui.graph.tree.recursive-tree';
import { TreeContextProvider } from '@teambit/base-ui.graph.tree.tree-context';
import { indentStyle } from '@teambit/base-ui.graph.tree.indent';
import { RootNode } from '@teambit/base-ui.graph.tree.root-node';
import { SidebarNode } from '../sidebar-node';
import type { SidebarTreeNode } from '../sidebar-section';
import styles from '../sidebar.module.scss';

export type TreeProps = {
  displayTitle?: string;
  tree?: SidebarTreeNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Tree({ displayTitle, tree, className, ...rest }: TreeProps) {
  const links = tree && tree.children;
  if (!links || links.length === 0) return null;
  const [active, setToActive] = useState(tree.id);

  return (
    <div style={{ ...indentStyle(0), ...rest.style }} className={classNames(styles.tree, className)} {...rest}>
      {displayTitle && <span className={styles.sidebarTitle}>{displayTitle}</span>}
      <TreeNodeContext.Provider value={SidebarNode}>
        <TreeContextProvider onSelect={(id) => setToActive(id)} selected={active}>
          <RootNode node={tree} depth={1} />
        </TreeContextProvider>
      </TreeNodeContext.Provider>
    </div>
  );
}
