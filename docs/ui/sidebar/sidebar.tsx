import React, { useMemo } from 'react';
import classNames from 'classnames';
// TODO: check with Uri why sidebar is distributed to many components and not documented.
import { TreeContextProvider } from '@teambit/base-ui.graph.tree.tree-context';
import { TreeNode } from '@teambit/base-ui.graph.tree.recursive-tree';
import { indentStyle } from '@teambit/base-ui.graph.tree.indent';
import { RootNode } from '@teambit/base-ui.graph.tree.root-node';
import { TreeNodeContext } from '@teambit/base-ui.graph.tree.recursive-tree';
import { createTree } from './create-tree';
import { SidebarNode } from './sidebar-node';

export type SidebarProps = {
  /**
   * a text to be rendered in the component.
   */
  onSelect?: (id: string) => void,

  selected?: string,

  /**
   * array of sorted human-readable sidebar paths. 
   * `Getting Started/Installing Bit`, id of this path in the sidebar would be: getting-started/installing-bit
   */
  paths: string[]

} & React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ onSelect, paths, selected, className, ...rest }: SidebarProps) {
  const rootNode = useMemo(() => {
    return createTree(paths);
  }, [paths]);

  return (
    <div style={{ ...indentStyle(1), ...rest.style }} className={classNames(className)} {...rest}>
      <TreeNodeContext.Provider value={SidebarNode}>
        <TreeContextProvider onSelect={onSelect} selected={selected}>
          <RootNode node={rootNode} depth={1} />
        </TreeContextProvider>
      </TreeNodeContext.Provider>
    </div>
  );
}
