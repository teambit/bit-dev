import React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from '@teambit/base-react.navigation.link';

import styles from './sticky-menu.module.scss';

export type StickyMenuProps = {
  /**
   * a text to be rendered in the component.
   */
  links: (LinkProps & { /** @deprecated */ text?: string })[];
} & React.HTMLAttributes<HTMLDivElement>;

export function StickyMenu({ links, className }: StickyMenuProps) {
  return (
    <div className={classNames(styles.stickyMenu, className)}>
      {links.map((link) => (
        <Link key={link.href} {...link}>
          {link.text || link.children}
        </Link>
      ))}
    </div>
  );
}
