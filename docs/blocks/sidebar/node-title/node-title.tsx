import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useLocation } from '@teambit/base-react.navigation.link';
import { indentClass } from '@teambit/base-ui.graph.tree.indent';
import { Icon } from '@teambit/design.elements.icon';
import { Link } from '@teambit/design.ui.navigation.link';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { getCustomIcon } from './get-custom-icon';
import { ConfigIcon } from './config-icon';
import styles from './node-title.module.scss';

export type NodeTitleProps = {
  /**
   * folder path
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
   * show title as active
   */
  active?: boolean;

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
  setOpen?: (value: React.SetStateAction<boolean>) => void;
};

export function NodeTitle({ id, icon, open, configPath, overviewPath, active, setOpen }: NodeTitleProps) {
  const location = useLocation();
  const isActivePath = !!overviewPath && location?.pathname === overviewPath;

  const displayName = id.replace(/\/$/, '').split('/').pop();
  const CustomIcon = getCustomIcon(icon);
  const handleOnFolderClick = () => {
    if (!setOpen) return;
    setOpen((x) => !x);
  };

  const content = (
    <div className={classNames(styles.left, active && !open && styles.collapsedActive)}>
      <Icon className={classNames(styles.icon, !open && styles.collapsed)} of="fat-arrow-down" />
      {CustomIcon}
      <span className={classNames(styles.name, ellipsis)}>{displayName}</span>
    </div>
  );

  const Title = (
    <div
      className={classNames(indentClass, styles.folder, isActivePath && styles.active)}
      onClick={handleOnFolderClick}
    >
      {overviewPath ? (
        <Link href={overviewPath} className={classNames(styles.folderLink)}>
          {content}
        </Link>
      ) : (
        content
      )}
      <ConfigIcon configPath={configPath} />
    </div>
  );

  return Title;
}
