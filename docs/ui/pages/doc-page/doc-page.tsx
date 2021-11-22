import React, { useRef, useMemo, useCallback, useState, useEffect, ReactNode } from 'react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Page } from '@teambit/base-react.pages.page';
import { NextPage } from '@teambit/community.ui.cards.next-page';
import type { Route } from '@teambit/docs.entities.docs-routes';
import { TableOfContent } from '@teambit/docs.ui.navigation.table-of-content';
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

export function DocPage({ title, description, nextPage, children, baseUrl = '/docs' }: DocPageProps) {
  const myRef = useRef(null);
  const contentRef = useRef(null);
  const headingElementsRef = useRef({});
  const [showNextPage, setNextPage] = useState(false);
  const [activeHeading, setActiveHeading] = useState(null);
  // let = b;
  // const content =
  const [headings, setHeadings] = useState<TableContent[]>([]);
  const executeScroll = () => scrollToRef(myRef);
  const pageDescription = description || `Documentation page for ${title} - Bit.`;

  const callback = (headings2) => {
    console.log('headings2', headings2);
    // debugger
    headingElementsRef.current = headings2.reduce((map, headingElement) => {
      map[headingElement.target.id] = headingElement;
      return map;
    }, headingElementsRef.current);

    // Get all headings that are currently visible on the page
    const visibleHeadings = [];

    headings2.forEach((el) => {
      console.log("heading ids", el.target.id)
      if (el.isIntersecting) visibleHeadings.push(el);
      // console.log('visibleHeadings', visibleHeadings);
      // console.log('visibleHeadings element', el.target.id);
    });

    const getIndexFromId = (id) => headings2.findIndex((heading) => heading.target.id === id);

    // If there is only one visible heading, this is our "active" heading
    if (visibleHeadings.length === 1) {
      setActiveHeading(visibleHeadings[0]?.target?.id);
      console.log("set active heading", visibleHeadings[0]?.target?.id)
      console.log('visibleHeadings', visibleHeadings);
      // If there is more than one visible heading,
      // choose the one that is closest to the top of the page
    } else if (visibleHeadings.length > 1) {
      const sortedVisibleHeadings = visibleHeadings.sort(
        (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
      );
      setActiveHeading(sortedVisibleHeadings[0]?.id);
      console.log("set sortedVisibleHeadings active heading", sortedVisibleHeadings[0]?.target?.id)
    }
    // console.log('visibleHeadings', visibleHeadings);
  };

  const useIntersectionObserver = (titles) => {
    // const headingElementsRef = React.useRef({});
    console.log('headingElementsRef', headingElementsRef, titles);
    debugger;
    // React.useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      // root: document.getElementById('content'),
      // threshold: [0, 1],
      rootMargin: '0px',
    });

    // const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    // console.log("headingElements", headingElements)
    titles.forEach((element) => {
      console.log('ele', element);
      console.log('ele2', element, element.getBoundingClientRect());
      observer.observe(element);
    });

    return () => observer.disconnect();
    // }, [setActiveId, headings]);
  };

  // const getDimensions = (ele) => {
  //   if (!ele) return {};
  //   const { height } = ele.getBoundingClientRect();
  //   const offsetTop = ele.offsetTop;
  //   const offsetBottom = offsetTop + height;

  //   return {
  //     height,
  //     offsetTop,
  //     offsetBottom,
  //   };
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { height: headerHeight } = getDimensions(contentRef.current);
  //     const scrollPosition = window.scrollY + headerHeight;
  //     console.log('contentRef', contentRef, scrollPosition, window.scrollY);
  //     debugger;
  //     const selected =
  //       headings &&
  //       headings.find((heading) => {
  //         const ele = heading.component;
  //         console.log('ele', ele, ele.getBoundingClientRect());
  //         if (ele) {
  //           const { offsetBottom, offsetTop } = getDimensions(ele);
  //           console.log('offsetBottom, offsetTop', offsetBottom, offsetTop);
  //           return scrollPosition > offsetTop && scrollPosition < offsetBottom;
  //         }
  //       });

  //     if (selected && selected.id !== activeHeading) {
  //       setActiveHeading(selected.id);
  //     } else if (!selected && activeHeading) {
  //       setActiveHeading(undefined);
  //     }
  //   };

  //   handleScroll();
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [headings]);

  const handle = useCallback(() => {
    // const a = useTableContent('h1, h2, h3');
    const a = new Promise((resolve, reject) => {
      try {
        return resolve(document.querySelectorAll('h1, h2, h3'));
      } catch (err) {
        reject(err);
      }
    })
      // .then((res) => {
      //   setHeadings(res);
      //   return res;
      // })
      .then((titles) => {
        console.log('titles', titles);
        debugger;
        useIntersectionObserver(titles);
        console.log('is this running?', titles);
        setHeadings(titles);
      });
    // const a = useTableContent(myRef, 'div.docsHeading');
  }, [window.location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      // executeScroll();
      handle();
      // handle2();
      setNextPage(true); // hides next page component until mdx data loads. should also be fixed by ssr
    }, 1000);
  }, [window.location.pathname]);

  // useEffect(() => {
  //   if (!headings) return;
  //   useIntersectionObserver(setActiveHeading);
  // }, [headings]);

  // @TODO @josh remove when ssr is working
  useEffect(() => {
    if (window?.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.replace('#', ''));
        element?.scrollIntoView();
        // const a = useTableContent()
        // setHeadings(a);
      }, 500);
    }
  }, [window?.location.hash]);

  console.log('activeHeading', activeHeading);
  console.log('headingElementsRef', headingElementsRef);

  return (
    <Page title={`${title} | Bit`} description={pageDescription}>
      <div ref={myRef} id="content" className={styles.content}>
        <MDXLayout /* components={mdxComponents(baseUrl)} */>
          <div className={styles.mdxLayout} ref={contentRef}>
            <h1>start</h1>
            {children}
          </div>
        </MDXLayout>
        <TableOfContent links={headings} activeLink={activeHeading} />
      </div>

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
