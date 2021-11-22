import React from 'react';
import classNames from 'classnames';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';
// import { NavLink } from "@teambit/design.ui.navigation.link";
// import { NavLink , NavLinkProps } from '@teambit/base-react.navigation.link';
import styles from './table-of-content.module.scss';

export type TableOfContentProps = {
  links: any[];
  activeLink: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function TableOfContent({ className, children, links = [], activeLink, ...rest }: TableOfContentProps) {
  console.log('links', links);
  console.log('activeLink', activeLink);

  return (
    <div {...rest} className={classNames(styles.tableOfContent, className)}>
      <div>on this page</div>
      {Array.isArray(links) &&
        links.map((link) => {
          return (
            <MenuLinkItem
              isActive={(...e) => {
                // console.log('eee', e);
                return false;
              }}
              href={`#${link.id}`}
            >
              {link.displayName}
            </MenuLinkItem>
          );
        })}
      {children}
    </div>
  );
}
