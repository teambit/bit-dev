import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { TabLink } from '@teambit/design.ui.navigation.tab-link';
import styles from './nav.module.scss';

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

export type NavLinksProps = {
  /**
   * list of links to display in the navbar
   */
  links: NavLinkType[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function NavLinks({ links, className, ...rest }: NavLinksProps) {
  return (
    <div {...rest} className={classNames(styles.navLinks, className)}>
      {links.map((link) => {
        const isExternal = link.href?.startsWith('https://') || undefined;
        return (
          <TabLink
            key={link.href}
            external={isExternal}
            className={styles.link}
            activeClassName={styles.active}
            href={link.href}
          >
            {link.title}
          </TabLink>
        );
      })}
    </div>
  );
}

NavLinks.defaultProps = {
  items: [],
};
