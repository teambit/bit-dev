import React from 'react';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';

import type { SidebarTreeNode } from '../sidebar-section';
import styles from './primary-links.module.scss';

export function PrimaryLinks({ links }: { links: SidebarTreeNode }) {
  const linkArr = links?.children;
  if (!linkArr || linkArr.length === 0) return null;
  return (
    <div className={styles.primaryLinks}>
      {linkArr.map((link) => {
        // TODO: oded fix that
        const icon = typeof link.payload?.icon === 'string' ? link.payload?.icon : undefined;

        return (
          // TODO! using legacy link
          <MenuLinkItem key={link.id} href={link.payload?.path} icon={icon}>
            {link.payload?.title}
          </MenuLinkItem>
        );
      })}
    </div>
  );
}
