import React, {ReactNode} from 'react';
import {TooltipDrawer} from '@teambit/evangelist.surfaces.tooltip';
import classNames from 'classnames';
import {ExternalLink} from "@teambit/design.ui.external-link";
import {Icon} from "@teambit/design.elements.icon";
import styles from './nav.module.scss';

export type NavLinkType = {
    /**
     * title of category
     */
    title: ReactNode;
    /**
     * list of links
     */
    links: LinkType[];
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
} & React.HTMLAttributes<HTMLDivElement>;

export function NavLinks({links}: NavLinksProps) {
  return (
    <div className={styles.navLinks}>
      {links.map((item, index) => (
        <TooltipDrawer key={index} position="bottom" className={styles.link} placeholder={<Placeholder>{item.title}</Placeholder>} hoverToOpen elevation="medium">
          {item.links.map((link, index) => (<ExternalLink key={index} href={link.href}>{link.text}</ExternalLink>))}
        </TooltipDrawer>
      ))}
    </div>
  )
}


export type PlaceholderProps = {} & React.HTMLAttributes<HTMLDivElement>;

function Placeholder({children, className, ...rest}: PlaceholderProps) {
  return (
    <div {...rest} className={classNames(styles.placeholder, className)}>
        {children}
      <Icon of="fat-arrow-down" className={styles.arrow} />
    </div>
  )
}
