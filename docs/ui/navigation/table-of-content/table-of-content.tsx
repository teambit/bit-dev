import React, { useMemo, ReactNode, useEffect, createRef, useRef } from 'react';
import classNames from 'classnames';
import { classes } from '@teambit/design.ui.surfaces.menu.item';
import { Link, useLocation } from '@teambit/base-react.navigation.link';
import { useElementOnFold } from '@teambit/docs.ui.hooks.use-element-on-fold';
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
  const { activeElement, elements } = useElementOnFold(rootRef, selectors);
  const containerRef = createRef<HTMLDivElement>();
  const loadedRef = useRef(false);
  const currentLocation = useLocation();
  const anchors = useMemo(() => getLinks(elements), [elements]);

  // scroll to active link, after first load and after content is loaded
  useEffect(() => {
    if (loadedRef.current) return;
    if (elements.length === 0) return;
    loadedRef.current = true;

    // find anchor with matching href
    const query = `a[href="${currentLocation?.hash || ''}"`;
    const el = containerRef?.current?.querySelector(query);
    el?.scrollIntoView();
  }, [elements]);

  if (anchors.length < 1) return null;

  return (
    <div {...rest} ref={containerRef} className={classNames(styles.tableOfContent, className)}>
      {title && <div className={styles.title}>{title}</div>}
      {anchors.map((link, index) => {
        const isActive = activeElement === link?.actualElement;
        const uniqueId = `${link?.id}-${index}`;
        return (
          <Link
            native
            key={uniqueId}
            id={`link-${link?.id || ''}`}
            className={classNames(styles.item, classes.menuItem, classes.interactive, isActive && classes.active)}
            href={`#${link?.id}`}
            data-element-type={link?.elementType}
          >
            {link?.displayName}
          </Link>
        );
      })}
      {children}
    </div>
  );
}

function getLinks(links: Element[]) {
  return Object.values(links).map((link) => {
    const linkText = link?.textContent;
    if (!linkText) return undefined;
    return {
      id: linkText.toLowerCase().replace(/ /g, '-'),
      displayName: linkText,
      elementType: link.tagName,
      actualElement: link,
    };
  });
}
