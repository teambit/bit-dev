import React, { ReactNode } from 'react';
import { NavLink } from "@teambit/design.ui.navigation.link";
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
}

export type LinkType = {
    /**
     * link display text
     */
    text: ReactNode;
    /**
     * link href
     */
    href: string;
}

export type NavLinksProps = {
    /**
     * list of links to display in the navbar
     */
  links: NavLinkType[];
};

export function NavLinks({links}: NavLinksProps) {
  return (
    <div className={styles.navLinks}>
      {links.map((link, key) => {
        const isExternal = link.href?.startsWith('http://') || undefined;
        return <NavLink key={key} external={isExternal} className={styles.link} activeClassName={styles.active} href={link.href}>{link.title}</NavLink>})}
    </div>
  )
}

NavLinks.defaultProps = {
  items: []
};
