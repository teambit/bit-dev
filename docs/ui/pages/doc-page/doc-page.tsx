import React, { useRef, useEffect, ReactNode } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import type { MDXProviderComponents } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { NextPage } from '@teambit/community.ui.cards.next-page';
import type { Route } from '@teambit/docs.entities.docs-routes';
import { h1 as H1, h2 as H2, h3 as H3 } from '@teambit/documenter.markdown.heading';
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
  return window.scrollTo(0, -ref.current.offsetTop);
};

const getTextLink = (element: React.ReactNode) =>
  typeof element === 'string' ? element.trim().toLowerCase().replace(/ /g, '-') : undefined;

const mdxComponents: MDXProviderComponents = {
  h1: ({ children, ...rest }) => <H1 link={getTextLink(children)} children={children} {...rest} />,
  h2: ({ children, ...rest }) => <H2 link={getTextLink(children)} children={children} {...rest} />,
  h3: ({ children, ...rest }) => <H3 link={getTextLink(children)} children={children} {...rest} />,
};

export function DocPage({ title, nextPage, children }: DocPageProps) {
  useEffect(() => {
    executeScroll();
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        element?.scrollIntoView();
      }, 500);
    }
  }, [location.hash]);

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <Page title={title}>
      <div ref={myRef} />
      <MDXLayout components={mdxComponents}>{children}</MDXLayout>

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
