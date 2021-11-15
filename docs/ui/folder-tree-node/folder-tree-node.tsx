import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { indentClass } from '@teambit/base-ui.graph.tree.indent';
import { Icon } from '@teambit/design.elements.icon';
import { Link } from '@teambit/design.ui.navigation.link';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { getCustomIcon } from './get-custom-icon';
import { ConfigIcon } from './config-icon';
import styles from './folder-tree-node.module.scss';

export type FolderTreeNodeProps = {
  /**
   * folder path.
   */
  id: string;

  /**
   * left icon of the folder.
   */
  icon?: ReactNode;

  /**
   * open or close folder.
   */
  open?: boolean;

  /**
   * configuration path for this docs section.
   */
  configPath?: string;

  /**
   * overview path for this docs section.
   */
  overviewPath?: string;

  /**
   * function that run on folder click.
   */
  setOpen: (value: React.SetStateAction<boolean>) => void;
};

export function FolderTreeNode({ id, icon, open, configPath, overviewPath, setOpen }: FolderTreeNodeProps) {
  const displayName = id.replace(/\/$/, '').split('/').pop();
  const CustomIcon = getCustomIcon(icon);
  const handleOnFolderClick = () => {
    // This prevent the folder to be closed when is open and the folder is active.
    if (overviewPath !== location.pathname && !open) setOpen(!open);
  };

  const DocsFolder = (
    <div className={classNames(indentClass, styles.folder)} onClick={handleOnFolderClick}>
      <div className={styles.left}>
        <Icon className={classNames(styles.icon, !open && styles.collapsed)} of="fat-arrow-down" />
        {CustomIcon}
        <span className={classNames(styles.name, ellipsis)}>{displayName}</span>
      </div>
      <ConfigIcon configPath={configPath} />
    </div>
  );

  if (overviewPath) {
    return (
      <Link
        href={overviewPath}
        className={classNames(styles.folderLink, overviewPath === location.pathname && styles.active)}
      >
        {DocsFolder}
      </Link>
    );
  }
  return DocsFolder;
}
