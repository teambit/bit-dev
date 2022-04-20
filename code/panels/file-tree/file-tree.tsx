import React, { useState, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { FileTree } from '@teambit/ui-foundation.ui.tree.file-tree';
import { DrawerUI } from '@teambit/ui-foundation.ui.tree.drawer';
import type { DependencyType } from '@teambit/code.ui.queries.get-component-code';
import { DependencyTree } from '@teambit/code.ui.dependency-tree';
import { TreeNodeRenderer } from '@teambit/base-ui.graph.tree.recursive-tree';

import styles from './file-tree.module.scss';

export type FileTreePanelProps = {
  fileTree: string[];
  dependencies?: DependencyType[];
  currentFile?: string;
  devFiles?: string[];
  mainFile?: string;
  FileTreeRenderer: TreeNodeRenderer<any>;
} & HTMLAttributes<HTMLDivElement>;

export function FileTreePanel({
  className,
  fileTree,
  dependencies,
  currentFile = '',
  FileTreeRenderer,
}: FileTreePanelProps) {
  const [openDrawerList, onToggleDrawer] = useState(['FILES']);

  const handleDrawerToggle = (id: string) => {
    const isDrawerOpen = openDrawerList.includes(id);
    if (isDrawerOpen) {
      onToggleDrawer((list) => list.filter((drawer) => drawer !== id));
      return;
    }
    onToggleDrawer((list) => list.concat(id));
  };

  return (
    <div className={classNames(styles.codeTabTree, className)}>
      <DrawerUI
        isOpen={openDrawerList.includes('FILES')}
        onToggle={() => handleDrawerToggle('FILES')}
        name="FILES"
        className={classNames(styles.codeTabDrawer)}
      >
        <FileTree TreeNode={FileTreeRenderer} files={fileTree || ['']} selected={currentFile} />
      </DrawerUI>
      <DrawerUI
        isOpen={openDrawerList.includes('DEPENDENCIES')}
        onToggle={() => handleDrawerToggle('DEPENDENCIES')}
        className={classNames(styles.codeTabDrawer)}
        name="DEPENDENCIES"
      >
        <DependencyTree dependenciesArray={dependencies} />
      </DrawerUI>
    </div>
  );
}
