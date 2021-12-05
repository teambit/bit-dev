import React, { useRef, useState, useEffect, ReactNode, Suspense } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { DocsPlugin } from '@teambit/docs.plugins.docs-plugin';
import { TableOfContent } from '@teambit/docs.ui.navigation.table-of-content';
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

const docSelectors = '.docs-heading h1, .docs-heading h2, .docs-heading h3';

const components = mdxComponents('/docs', 'docs-heading');
const scrollToRef = (ref) => {
  return window.scrollTo(0, -ref.current.offsetTop);
};

export function DocPage({ route, index, children, baseUrl = '/docs', plugins = [] }: DocPageProps) {
  const myRef = useRef(null);
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [loaded, setLoaded] = useState(false);

  const pageDescription = route.description || `Documentation page for ${route.title} - Bit.`;

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
    // <Suspense fallback={<div />}>
    //   <Page title={`${title} | Bit`} description={pageDescription} className={styles.docsPage}>
    //     <div ref={myRef} id="content" className={styles.content}>
    //       <MDXLayout components={components}>
    //         <div className={styles.mdxLayout} ref={contentRef}>
    //           {children}
    //         </div>
    //       </MDXLayout>
    //       {/* <Panel className={styles.rightPanel} plugins={plugins?.flatMap((plugin) => plugin.right)} />
    //       <Panel className={styles.bottomPanel} plugins={plugins?.flatMap((plugin) => plugin.bottom)} /> */}
    //       {nextPage && loaded && (
    //         <NextPage
    //           className={styles.next}
    //           title={nextPage.title}
    //           description={nextPage.description}
    //           href={nextPage.absPath}
    //         />
    //       )}
    //     </div>

    //     {loaded && (
    //       <TableOfContent
    //         title="on this page"
    //         className={styles.tableOfContent}
    //         rootRef={contentRef}
    //         selectors={docSelectors}
    //       />
    //     )}
    //   </Page>
    // </Suspense>
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
