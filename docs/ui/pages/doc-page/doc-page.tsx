import React, { useRef, useMemo, useCallback, useState, useEffect, ReactNode } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { NextPage } from '@teambit/community.ui.cards.next-page';
import type { Route } from '@teambit/docs.entities.docs-routes';
import { TableOfContent, useIntersectionObserver, getElements } from '@teambit/docs.ui.navigation.table-of-content';
import { mdxComponents } from './mdx-components';
import { useTableContent, TableContent } from './use-table-content';
import styles from './doc-page.module.scss';

export type DocPageProps = {
  /**
   * title of the docs page.
   */
  title: string;

  /**
   * description of the docs page.
   */
  description?: string;

  /**
   * next page to show.
   */
  nextPage?: Route;

  /**
   * a text to be rendered in the component.
   */
  children: ReactNode;

  /**
   * base url to use for docs section.
   */
  baseUrl?: string;
};

const scrollToRef = (ref) => {
  return window.scrollTo(0, -ref.current.offsetTop);
};

const components = mdxComponents('/docs');

export function DocPage({ title, description, nextPage, children, baseUrl = '/docs' }: DocPageProps) {
  const myRef = useRef(null);
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [showNextPage, setNextPage] = useState(false);
  const [activeHeading, setActiveHeading] = useState<string | undefined>(undefined);

  const [headings, setHeadings] = useState<Element[]>([]);
  // const executeScroll = () => scrollToRef(myRef);
  const pageDescription = description || `Documentation page for ${title} - Bit.`;

  const startObserver = useCallback(() => {
    const titlesArray = getElements(contentRef, '.docs-heading h1, .docs-heading h2, .docs-heading h3');

    useIntersectionObserver(titlesArray, setActiveHeading);

    setHeadings(titlesArray);
  }, [window.location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      startObserver();
      setNextPage(true); // hides next page component until mdx data loads. should also be fixed by ssr
    }, 300);
  }, [window.location.pathname]);

  // @TODO @josh remove when ssr is working
  useEffect(() => {
    if (window?.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.replace('#', ''));
        element?.scrollIntoView();
      }, 500);
    }
  }, [window?.location.hash]);

  return (
    <Page title={`${title} | Bit`} description={pageDescription} className={styles.docsPage}>
      <div ref={myRef} id="content" className={styles.content}>
        <MDXLayout components={components}>
          <div className={styles.mdxLayout} ref={contentRef}>
            {children}
          </div>
        </MDXLayout>
        {nextPage && showNextPage && (
          <NextPage
            className={styles.next}
            title={nextPage.title}
            description={nextPage.description}
            href={nextPage.absPath}
          />
        )}
      </div>
      <TableOfContent
        title="on this page"
        className={styles.tableOfContent}
        links={headings}
        activeLink={activeHeading}
      />
    </Page>
  );
}
