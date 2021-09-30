import React, { useEffect, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

export type PageProps = {
  /**
   * title of the page.
   */
  title: string,

  /**
   * description of the page. used for metadata and can also be used from concrete implementation.
   */
  description?: string,

  /**
   * children of the node.
   */
  children: ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

export function Page({children, title, description, ...rest}: PageProps) {  
  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>  
        {/* <meta name="description" content={description} /> */}
      </Helmet>
      {children}
    </div>
  )
};

