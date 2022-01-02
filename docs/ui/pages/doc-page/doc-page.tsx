import React, { useRef, useEffect, ReactNode, Suspense } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { DocsPlugin } from '@teambit/docs.plugins.docs-plugin';
import type { Route } from '@teambit/docs.entities.docs-routes';
import { DocPageContext } from './doc-page-context';
import { mdxComponents } from './mdx-components';
import styles from './doc-page.module.scss';

export type DocPageProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode;

  /**
   * current route.
   */
  route: Route;

  /**
   * current key.
   */
  index: number;

  plugins?: DocsPlugin<any>[];
};

const components = mdxComponents('/docs', 'docs-heading');
const scrollToRef = (ref) => {
  return window.scrollTo(0, -ref.current.offsetTop);
};

export function DocPage({ route, index, children, plugins = [] }: DocPageProps) {
  const myRef = useRef(null);
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const pageDescription = route.description || `Documentation page for ${route.title} - Bit.`;

  useEffect(() => {
    scrollToRef(myRef);
  }, [contentRef.current]);
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
      <DocPageContext.Provider value={{ index, route }}>
        <Page title={`${route.title} | Bit`} description={pageDescription} className={styles.docsPage}>
          <div ref={myRef} id="content" className={styles.content}>
            <MDXLayout components={components}>
              <div className={styles.mdxLayout} ref={contentRef}>
                {children}
              </div>
            </MDXLayout>

            {plugins.map((plugin) => {
              return plugin.page.bottom?.flatMap((Plugin) => {
                return <Plugin {...route.plugins[plugin.name]} key={plugin.name} contentRef={contentRef} />;
              });
            })}
          </div>
          {plugins.map((plugin) => {
            return plugin.page.right?.flatMap((Plugin) => {
              return <Plugin {...route.plugins[plugin.name]} key={plugin.name} contentRef={contentRef} />;
            });
          })}
        </Page>
      </DocPageContext.Provider>
    </Suspense>
  );
}
