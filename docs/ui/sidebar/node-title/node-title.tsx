import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { indentClass } from '@teambit/base-ui.graph.tree.indent';
import { Icon } from '@teambit/design.elements.icon';
import { Link } from '@teambit/design.ui.navigation.link';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { getCustomIcon } from './get-custom-icon';
import { ConfigIcon } from './config-icon';
import styles from './node-title.module.scss';

export type NodeTitleProps = {
  /**
   * folder path.
   */
  id: string;

  /**
   * left icon of the title.
   */
  icon?: ReactNode;

  /**
   * open or close the node.
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

export function NodeTitle({ id, icon, open, configPath, overviewPath, setOpen }: NodeTitleProps) {
  const displayName = id.replace(/\/$/, '').split('/').pop();
  const CustomIcon = getCustomIcon(icon);
  const handleOnFolderClick = () => {
    // This prevent the folder to be closed when is open and the folder is active.
    if (overviewPath !== location.pathname && !open) setOpen(!open);
  };

  const Title = (
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
        {Title}
      </Link>
    );
  }
  return Title;
}