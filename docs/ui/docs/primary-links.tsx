import React from 'react';
import { SidebarNode } from '@teambit/docs.ui.sidebar';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';
import styles from './docs.module.scss';

export function PrimaryLinks({ tree }: { tree: SidebarNode; }) {
  const links = tree.children;
  if (!links || links.length === 0)
    return null;
  return (
    <div className={styles.primaryLinks}>
      {links.map((link, index) => {
        // TODO: oded fix that
        const icon = typeof link.payload?.icon === 'string' ? link.payload?.icon : undefined;
        return (
          <MenuLinkItem key={index} href={link.payload?.path} icon={icon}>
            {link.payload?.title}
          </MenuLinkItem>
        );
      })}
    </div>
  );
}
