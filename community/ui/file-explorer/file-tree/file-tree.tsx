import React, { useState, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { FileTree } from '@teambit/ui-foundation.ui.tree.file-tree';
import { DrawerUI } from '@teambit/ui-foundation.ui.tree.drawer';
import { TreeNodeRenderer } from '@teambit/base-ui.graph.tree.recursive-tree';
import styles from './file-tree.module.scss';

export type FileTreePanelProps = {
  fileTree: string[];
  currentFile?: string;
  title?: string;
  FileTreeRenderer: TreeNodeRenderer<any>;
} & HTMLAttributes<HTMLDivElement>;

export function FileTreePanel({
  className,
  fileTree,
  title,
  currentFile = '',
  FileTreeRenderer,
}: FileTreePanelProps) {
  const drawerTitle = title ?? 'FILES';
  const [openDrawerList, onToggleDrawer] = useState([drawerTitle]);

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
        isOpen={openDrawerList.includes(drawerTitle)}
        onToggle={() => handleDrawerToggle(drawerTitle)}
        name={drawerTitle}
        className={classNames(styles.codeTabDrawer)}
      >
        <FileTree
          TreeNode={FileTreeRenderer}
          files={fileTree || ['']}
          selected={currentFile}
        />
      </DrawerUI>
    </div>
  );
}
