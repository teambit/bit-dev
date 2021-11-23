import React, { useMemo } from 'react';
import classNames from 'classnames';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';
import styles from './table-of-content.module.scss';

export type TableOfContentProps = {
  links: any[];
  activeLink: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function TableOfContent({ className, children, links, activeLink, ...rest }: TableOfContentProps) {
  if (!links) return null;
  const headings = useMemo(() => getLinks(links), [links]);

  return (
    <div {...rest} className={classNames(styles.tableOfContent, className)}>
      <div className={styles.title}>on this page</div>
      {headings.map((link) => {
        return (
          <MenuLinkItem
            key={link?.id}
            className={styles.item}
            isActive={() => activeLink === link?.displayName}
            href={`#${link?.id}`}
          >
            {link?.displayName}
          </MenuLinkItem>
        );
      })}
      {children}
    </div>
  );
}

function getLinks(links) {
  if (!links) return;
  return Object.values(links).map((link) => {
    const linkText = link?.textContent;
    if (!linkText) return;
    return {
      id: linkText.toLowerCase().replace(/ /g, '-'),
      displayName: linkText,
    };
  });
}
