import React, { ReactNode } from 'react';
import { TooltipDrawer } from '@teambit/evangelist.surfaces.tooltip';
import classNames from 'classnames';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { Link } from 'react-router-dom';
import { Icon } from '@teambit/design.elements.icon';
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
      {links.map((item, index) => (
        (item.href) ?
        <Placeholder className={styles.link}>
          {item.href.startsWith('http://') ? 
          <ExternalLink key={index} href={item.href}>{item.title}</ExternalLink>
          : <Link to={item.href}>{item.title}</Link>
          }
          
        </Placeholder>
        : <TooltipDrawer key={index} position="bottom" className={styles.link} placeholder={<Placeholder>{item.title}</Placeholder>} hoverToOpen elevation="medium">
          {item.links.map((link, index) => (<ExternalLink key={index} href={link.href}>{link.text}</ExternalLink>))}
        </TooltipDrawer>
      ))}
    </div>
  )
}

NavLinks.defaultProps = {
  items: []
};

export type PlaceholderProps = {} & React.HTMLAttributes<HTMLDivElement>;

function Placeholder({children, className, ...rest}: PlaceholderProps) {
  return (
    <div {...rest} className={classNames(styles.placeholder, className)}>
        {children}
      <Icon of="fat-arrow-down" className={styles.arrow} />
    </div>
  )
}
