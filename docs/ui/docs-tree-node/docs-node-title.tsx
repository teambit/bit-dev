import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { indentClass } from '@teambit/base-ui.graph.tree.indent';
import { Icon } from '@teambit/design.elements.icon';
import { Link } from '@teambit/design.ui.navigation.link';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { getCustomIcon } from './get-custom-icon';
import styles from './docs-tree-node.module.scss';

type DocsNodeTitleProps = {
  id: string;
  icon?: ReactNode;
  open?: boolean;
  shortcutPath?: string;
  setOpen: (value: React.SetStateAction<boolean>) => void;
};

export function DocsNodeTitle({ id, icon, open, shortcutPath, setOpen }: DocsNodeTitleProps) {
  const displayName = id.replace(/\/$/, '').split('/').pop();
  const CustomIcon = getCustomIcon(icon);
  const ConfigSectionIcon = shortcutPath && (
    <Link href={shortcutPath} external={shortcutPath.startsWith('http')} className={styles.configLink}>
      <Icon className={styles.configIcon} of="settings" />
    </Link>
  );
  return (
    <div className={classNames(indentClass, styles.folder)} onClick={() => setOpen(!open)}>
      <div className={styles.left}>
        <Icon className={classNames(styles.icon, !open && styles.collapsed)} of="fat-arrow-down" />
        {CustomIcon}
        <span className={classNames(styles.name, ellipsis)}>{displayName}</span>
      </div>
      {ConfigSectionIcon}
    </div>
  );
}
