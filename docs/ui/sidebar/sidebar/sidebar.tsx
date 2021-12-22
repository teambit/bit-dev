import React, { useState } from 'react';
import classNames from 'classnames';
import { TreeNodeContext } from '@teambit/base-ui.graph.tree.recursive-tree';
// TODO: check with Uri why sidebar is distributed to many components and not documented.
import { TreeContextProvider } from '@teambit/base-ui.graph.tree.tree-context';
import { indentStyle } from '@teambit/base-ui.graph.tree.indent';
import { RootNode } from '@teambit/base-ui.graph.tree.root-node';
import { SidebarNode } from './sidebar-node';
import { SidebarSection } from './sidebar-section';
import styles from './sidebar.module.scss';
import { PrimarySection } from './primary-section';

export type SidebarProps = {
  /**
   * primary links.
   */
  primaryLinks: PrimarySection[];

  /**
   * sections of the sidebar. each section includes a title and a tree of nodes.
   */
  sections: SidebarSection[];

  /**
   * prefix for all rendered links in the sidebar.
   */
  linkPrefix?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ linkPrefix, className, ...rest }: SidebarProps) {
  const links = tree && tree.children;
  if (!links || links.length === 0) return null;
  const [active, setToActive] = useState(tree.id);

  // support primary links.
  return (
    <div style={{ ...indentStyle(0), ...rest.style }} className={classNames(styles.sidebar, className)} {...rest}>
      {displayTitle && <span className={styles.sidebarTitle}>{displayTitle}</span>}
      <TreeNodeContext.Provider value={SidebarNode}>
        <TreeContextProvider onSelect={(id) => setToActive(id)} selected={active}>
          <RootNode node={tree} depth={1} />
        </TreeContextProvider>
      </TreeNodeContext.Provider>
    </div>
  );
}
