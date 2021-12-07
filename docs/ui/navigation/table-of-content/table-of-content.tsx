import React, { useMemo, useState, useEffect, ReactNode } from 'react';
import classNames from 'classnames';
import { MenuLinkItem } from '@teambit/design.ui.surfaces.menu.link-item';
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
  const [isLoaded, setLoaded] = useState(false);
  const { activeElement, elements } = useElementOnFold(rootRef, selectors, !isLoaded);
  const anchors = useMemo(() => getLinks(elements), [elements]);

  useEffect(() => {
    const targetNode = rootRef?.current;
    if (!(targetNode instanceof HTMLElement)) {
      return () => {};
    }
    const config = {
      attributes: true,
      childList: true,
      characterData: true,
    };
    // watch for changes on children
    const observer = new MutationObserver(() => {
      setLoaded(true);
      observer.disconnect();
    });

    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, [rootRef?.current]);

  if (!anchors) return null;
  return (
    <div {...rest} className={classNames(styles.tableOfContent, className)}>
      {title && <div className={styles.title}>{title}</div>}
      {anchors.map((link) => {
        return (
          <MenuLinkItem
            key={link?.id}
            className={styles.item}
            isActive={() => activeElement?.innerText === link?.displayName}
            href={`#${link?.id}`}
            data-element-type={link?.element}
          >
            {link?.displayName}
          </MenuLinkItem>
        );
      })}
      {children}
    </div>
  );
}

function getLinks(links: Element[]) {
  if (!links) return undefined;
  return Object.values(links).map((link) => {
    const linkText = link?.textContent;
    if (!linkText) return undefined;
    return {
      id: linkText.toLowerCase().replace(/ /g, '-'),
      displayName: linkText,
      element: link.tagName,
    };
  });
}
