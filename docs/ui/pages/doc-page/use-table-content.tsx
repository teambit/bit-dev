import React from 'react';

export type TableContent = {
  id: string;
  displayName: string;
  type: string;
  heading: React.ReactNode;
};
export function useTableContent(/* ref, */ selectors) {
  const a = Array.from(document.querySelectorAll(selectors));
  console.log('aaa', a);
  debugger
  // const a = contentRef?.current?.querySelectorAll('h1, h2, h3');
  const res: TableContent[] =
    a &&
    a
      .map((heading) => {
        // console.log('parent', heading.parentElement?.className);
        const isDocsTitle = heading.parentElement?.className.includes('docs-heading');
        if (isDocsTitle) {
          return {
            id: heading.id,
            displayName: heading.innerText,
            type: heading.nodeName,
            component: heading,
          };
        }
      })
      .filter((x) => !!x);
  // console.log('useTableContent', res);
  return res;
}
