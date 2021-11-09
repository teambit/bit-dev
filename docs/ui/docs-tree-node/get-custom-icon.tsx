import React, { ReactNode } from 'react';
import { Icon } from '@teambit/design.elements.icon';
import styles from './docs-tree-node.module.scss';

export function getCustomIcon(icon: string | ReactNode) {
  if (!icon) return null;
  if (typeof icon === 'string') {
    if (icon.startsWith('http')) {
      return <img src={icon} className={styles.img} alt="" />;
    }
    // for icomoon icons
    return <Icon className={styles.icon} of={icon} />;
  }
  // for custom elements
  return icon;
}
