import React, { ComponentType } from 'react';
import classNames from 'classnames';
import { TabLink, TabLinkProps } from '@teambit/design.ui.navigation.tab-link';
import { LinkProps } from '@teambit/design.ui.navigation.link';
import styles from './menu.module.scss';

export type MenuLinkType = LinkProps;

export type NavigationMenuProps = {
  /**
   * list of links to display in the navbar
   */
  links?: MenuLinkType[];

  /**
   * An element to use to override the Link in the menu. defaults to TabLink
   */
  Link?: ComponentType<TabLinkProps>;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function NavigationMenu({ links = [], className, Link = TabLink, ...rest }: NavigationMenuProps) {
  return (
    <div {...rest} className={classNames(styles.navLinks, className)}>
      {links.map((link) => {
        const isExternal = link.href?.startsWith('https://') || undefined;
        return (
          <Link
            key={link.href}
            external={isExternal}
            className={styles.link}
            activeClassName={styles.active}
            {...link}
          />
        );
      })}
    </div>
  );
}
