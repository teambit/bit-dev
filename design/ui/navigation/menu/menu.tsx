import React, { ReactNode, ComponentType } from 'react';
import classNames from 'classnames';
import { TabLink, TabLinkProps } from '@teambit/design.ui.navigation.tab-link';
import styles from './menu.module.scss';

export type NavLinkType = {
  /**
   * title of category
   */
  title: ReactNode;
  /**
   * list of links
   */
  links?: LinkType[];

  /**
   * link href. if a link is provided, links property is ignored.
   */
  href?: string;
};

export type LinkType = {
  /**
   * link display text
   */
  text: ReactNode;
  /**
   * link href
   */
  href: string;
};

export type NavigationMenuProps = {
  /**
   * list of links to display in the navbar
   */
  links?: NavLinkType[];

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
            href={link.href}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
