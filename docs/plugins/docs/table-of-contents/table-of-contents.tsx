import React, { ReactNode } from 'react';
// import { DocsPlugin } from '@teambit/docs.ui.docs';

export type TableOfContentsProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

// export class TableOfContentsPlugin implements DocsPlugin<{}> {
//   page = {
//     right: () => {
//       return <div></div>;
//     },
//   };

//   enrichContent() {}
// }

export function TableOfContents({ children }: TableOfContentsProps) {
  return <div>{children}</div>;
}
