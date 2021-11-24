import React, { useMemo, ReactNode, useState, useEffect } from 'react';
import classNames from 'classnames';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';
import { getElements } from './get-elements';
import { useIntersectionObserver } from './use-intersection-observer';
import styles from './table-of-content.module.scss';

export type TableOfContentProps = {
  /**
   * title of the table.
   */
  title?: ReactNode;
  /**
   * the ref of the parent element. fallback is document.
   */
  rootRef?: React.MutableRefObject<HTMLElement>;
  /**
   * the selectors to identify the elements to be collected. fallback is h1-h8.
   */
  selectors?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function TableOfContent({ className, children, title, rootRef, selectors, ...rest }: TableOfContentProps) {
  const [activeHeading, setActiveHeading] = useState<string | undefined>(undefined);
  const [pageHeadings, setHeadings] = useState<HTMLElement[]>([]);

  const headings = useMemo(() => getLinks(pageHeadings), [pageHeadings]);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const timeoutId = setTimeout(() => {
      const titlesArray: HTMLElement[] = getElements({ ref: rootRef, selectors });

      observer = useIntersectionObserver(titlesArray, setActiveHeading);
      setHeadings(titlesArray);
    }, 300);
    return () => {
      // clear observer and timeout
      observer?.disconnect();
      clearTimeout(timeoutId);
    };
  }, [window.location.pathname]);
  if (!headings) return null;

  return (
    <div {...rest} className={classNames(styles.tableOfContent, className)}>
      {title && <div className={styles.title}>{title}</div>}
      {headings.map((link) => {
        return (
          <MenuLinkItem
            key={link?.id}
            className={styles.item}
            isActive={() => activeHeading === link?.displayName}
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

function getLinks(links: HTMLElement[]) {
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
