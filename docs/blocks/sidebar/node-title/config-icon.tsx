import React from 'react';
import { Icon } from '@teambit/design.elements.icon';
import { NavLink } from '@teambit/design.ui.navigation.link';
import styles from './node-title.module.scss';

export function ConfigIcon({ configPath }: { configPath: string | undefined }) {
  if (!configPath) return null;
  return (
    <NavLink
      href={configPath}
      className={styles.configLink}
      activeClassName={styles.active}
      // This prevent open/close when clicking on the icon.
      onClick={(e) => e.stopPropagation()}
      exact
    >
      <Icon className={styles.configIcon} of="settings" />
    </NavLink>
  );
}
