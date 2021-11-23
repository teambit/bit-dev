import React, { useMemo, ReactNode, useState, useEffect } from 'react';
import classNames from 'classnames';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';
import { getElements } from './get-elements';
import { useIntersectionObserver } from './use-intersection-observer';
import styles from './table-of-content.module.scss';

export type TableOfContentProps = {
  title?: ReactNode;
  rootRef?: React.MutableRefObject<HTMLElement>;
  selectors?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function TableOfContent({ className, children, title, rootRef, selectors, ...rest }: TableOfContentProps) {
  const [activeHeading, setActiveHeading] = useState<string | undefined>(undefined);
  const [pageHeadings, setHeadings] = useState<HTMLElement[]>([]);

  const headings = useMemo(() => getLinks(pageHeadings), [pageHeadings]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const timeoutId = setTimeout(() => {
      const titlesArray: HTMLElement[] = getElements({ ref: rootRef, selectors });

      const observer = useIntersectionObserver(titlesArray, setActiveHeading);
      cleanup = observer?.disconnect;
      setHeadings(titlesArray);
    }, 300);
    return () => {
      // clear observer and timeout
      cleanup?.();
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
