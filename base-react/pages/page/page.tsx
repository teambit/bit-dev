import React, { useEffect, ReactNode } from 'react';

export type PageProps = {
  /**
   * title of the page.
   */
  title: string,

  /**
   * children of the node.
   */
  children: ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

export function Page({children, title, ...rest}: PageProps) {
  useEffect(() => {
    // TODO: handle all SEO stuff here.
    document.title = title || '';
  }, [title]);
  
  return (
    <div {...rest}>
      {children}
    </div>
  )
};

