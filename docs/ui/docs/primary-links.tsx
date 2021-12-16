import React from 'react';
import type { SidebarTreeNode } from '@teambit/docs.ui.sidebar.sidebar';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';
import styles from './docs.module.scss';

export function PrimaryLinks({ tree }: { tree: SidebarTreeNode }) {
  const links = tree.children;
  if (!links || links.length === 0) return null;
  return (
    <div className={styles.primaryLinks}>
      {links.map((link) => {
        // TODO: oded fix that
        const icon = typeof link.payload?.icon === 'string' ? link.payload?.icon : undefined;
        return (
          <MenuLinkItem key={link.id} href={link.payload?.path} icon={icon}>
            {link.payload?.title}
          </MenuLinkItem>
        );
      })}
    </div>
  );
}
