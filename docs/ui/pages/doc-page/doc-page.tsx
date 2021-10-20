import React, { useRef, useEffect, ReactNode } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { NextPage } from '@teambit/community.ui.cards.next-page';
import type { Route } from '@teambit/docs.ui.docs';
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
};

const scrollToRef = (ref) => {
  return window.scrollTo(0, -ref.current.offsetTop)
}   


export function DocPage({ title, nextPage, children }: DocPageProps) {

  useEffect(() => {
    executeScroll()
  }, [])

  const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)
  return (
    <Page title={title}>
      <div ref={myRef} />
      <MDXLayout>{children}</MDXLayout>

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
