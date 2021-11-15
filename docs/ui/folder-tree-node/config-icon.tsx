import React from 'react';
import classNames from 'classnames';
import { Icon } from '@teambit/design.elements.icon';
import { Link } from '@teambit/design.ui.navigation.link';
import styles from './folder-tree-node.module.scss';

export function ConfigIcon({ configPath }: { configPath: string | undefined }) {
  if (!configPath) return null;
  return (
    <Link
      href={configPath}
      className={styles.configLink}
      // This prevent open/close when clicking on the icon.
      onClick={(e) => e.stopPropagation()}
    >
      <Icon
        className={classNames(styles.configIcon, configPath === location.pathname && styles.active)}
        of="settings"
      />
    </Link>
  );
}
