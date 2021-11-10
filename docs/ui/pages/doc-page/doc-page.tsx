import React, { useRef, useEffect, ReactNode } from 'react';
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

export function DocPage({ title, nextPage, children, baseUrl = '/docs' }: DocPageProps) {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
  }, []);

  // @TODO @josh remove when ssr is working
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.replace('#', ''));
        element?.scrollIntoView();
      }, 500);
    }
  }, [window.location.hash]);

  return (
    <Page title={title}>
      <div ref={myRef} />
      <MDXLayout components={mdxComponents(baseUrl)}>
        <div className={styles.mdxLayout}>{children}</div>
      </MDXLayout>

      {nextPage && (
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
