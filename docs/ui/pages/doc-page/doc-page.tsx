import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { NextPage } from '@teambit/community.ui.cards.next-page';
import type { Route } from '@teambit/docs.entities.docs-routes';
import { mdxComponents } from './mdx-components';
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

export function DocPage({ title, description, nextPage, children, baseUrl = '/docs' }: DocPageProps) {
  const myRef = useRef(null);
  const [showNextPage, setNextPage] = useState(false);
  const executeScroll = () => scrollToRef(myRef);
  const pageDescription = description || `Documentation page for ${title} - Bit.`;

  useEffect(() => {
    executeScroll();
  }, []);

  // @TODO @josh remove when ssr is working
  useEffect(() => {
    if (window?.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.replace('#', ''));
        element?.scrollIntoView();

        setNextPage(true); // hides next page component until mdx data loads. should also be fixed by ssr
      }, 500);
    }
  }, [window?.location.hash]);

  return (
    <Page title={`${title} | Bit`} description={pageDescription}>
      <div ref={myRef} />
      <MDXLayout components={mdxComponents(baseUrl)}>
        <div className={styles.mdxLayout}>{children}</div>
      </MDXLayout>

      {nextPage && showNextPage && (
        <NextPage
          className={styles.next}
          title={nextPage.title}
          description={nextPage.description}
          href={nextPage.absPath}
        />
      )}
    </Page>
  );
}
