import React from 'react';
import classNames from 'classnames';
import { Link } from '@teambit/base-react.navigation.link';
import { Links } from '@teambit/community.entity.links';

import styles from './sticky-menu.module.scss';

export type StickyMenuProps = {
  /**
   * a text to be rendered in the component.
   */
  links: Links[];
} & React.HTMLAttributes<HTMLDivElement>;

export function StickyMenu({ links, className }: StickyMenuProps) {
  return (
    <div className={classNames(styles.stickyMenu, className)}>
      {links.map((link) => (
        <Link key={link.text} href={link.href}>
          {link.text}
        </Link>
      ))}
    </div>
  );
}
