import React, { useRef, useState, useEffect, ReactNode, Suspense } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { NextPage } from '@teambit/community.ui.cards.next-page';
// import { Panel } from '@teambit/base-react.layout.panel';
import type { Route } from '@teambit/docs.entities.docs-routes';
import { TableOfContent } from '@teambit/docs.ui.navigation.table-of-content';
import { mdxComponents } from './mdx-components';
import styles from './doc-page.module.scss';
import { DocPlugin } from './doc-plugin';

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
   * plugins to render in the doc page.
   */
  plugins?: DocPlugin[];

  /**
   * base url to use for docs section.
   */
  baseUrl?: string;
};

const docSelectors = '.docs-heading h1, .docs-heading h2, .docs-heading h3';

const components = mdxComponents('/docs', 'docs-heading');
const scrollToRef = (ref) => {
  return window.scrollTo(0, -ref.current.offsetTop);
};

export function DocPage({ title, description, nextPage, children, baseUrl = '/docs', plugins }: DocPageProps) {
  const myRef = useRef(null);
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [loaded, setLoaded] = useState(false);

  const pageDescription = description || `Documentation page for ${title} - Bit.`;

  useEffect(() => {
    const targetNode = contentRef.current;

    const config = {
      attributes: true,
      childList: true,
      characterData: true,
    };
    const callback = () => {
      setLoaded(true);
      scrollToRef(myRef);
    };
    const observer = new MutationObserver(callback);
    if (targetNode instanceof HTMLElement) {
      observer.observe(targetNode, config);
    }
  }, [contentRef?.current]);

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
    <Suspense fallback={<div />}>
      <Page title={`${title} | Bit`} description={pageDescription} className={styles.docsPage}>
        <div ref={myRef} id="content" className={styles.content}>
          <MDXLayout components={components}>
            <div className={styles.mdxLayout} ref={contentRef}>
              {children}
            </div>
          </MDXLayout>
          {/* <Panel className={styles.rightPanel} plugins={plugins?.flatMap((plugin) => plugin.right)} />
          <Panel className={styles.bottomPanel} plugins={plugins?.flatMap((plugin) => plugin.bottom)} /> */}
          {nextPage && loaded && (
            <NextPage
              className={styles.next}
              title={nextPage.title}
              description={nextPage.description}
              href={nextPage.absPath}
            />
          )}
        </div>

        {loaded && (
          <TableOfContent
            title="on this page"
            className={styles.tableOfContent}
            rootRef={contentRef}
            selectors={docSelectors}
          />
        )}
      </Page>
    </Suspense>
  );
}
