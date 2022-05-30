import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

export type PageProps = {
  /**
   * title of the page.
   */
  title: string;

  /**
   * description of the page. used for metadata and can also be used from concrete implementation.
   */
  description?: string;

  /**
   * children of the node.
   */
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Page({ children, title, description, ...rest }: PageProps) {
  return (
    <div {...rest}>
      <Helmet>
        {/* only add what is needed */}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        <meta name="twitter:image" content="https://static.bit.cloud/og-images/bit-marketing-og-img-twitter.png" />
        <meta property="og:image" content="https://static.bit.cloud/og-images/bit-marketing-og-img-facebook.png" />
      </Helmet>
      {children}
    </div>
  );
}
