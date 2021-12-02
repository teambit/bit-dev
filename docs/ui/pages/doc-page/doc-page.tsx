import React, { useRef, useEffect, ReactNode } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { DocsPlugin } from '@teambit/docs.ui.docs';
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

  /**
   * base url to use for docs section.
   */
  baseUrl?: string;

  plugins?: DocsPlugin<any>[];
};

// const scrollToRef = (ref) => {
//   return window.scrollTo(0, -ref.current.offsetTop);
// };

export function DocPage({ route, index, children, baseUrl = '/docs', plugins = [] }: DocPageProps) {
  const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef);
  const pageDescription = route.description || `Documentation page for ${route.title} - Bit.`;

  // useEffect(() => {
  //   executeScroll();
  // }, []);

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
    <DocPageContext.Provider value={{ index, route }}>
      <Page title={`${route.title} | Bit`} description={pageDescription}>
        <div ref={myRef} />
        <MDXLayout components={mdxComponents(baseUrl)}>
          <div className={styles.mdxLayout}>{children}</div>
        </MDXLayout>

        {plugins.map((plugin) => {
          return plugin.page.bottom?.flatMap((Plugin) => {
            return <Plugin {...route.plugins[plugin.name]} key={plugin.name} />;
          });
        })}
        {plugins.map((plugin) => {
          return plugin.page.right?.flatMap((Plugin) => {
            return <Plugin {...route.plugins[plugin.name]} key={plugin.name} />;
          });
        })}
      </Page>
    </DocPageContext.Provider>
  );
}
