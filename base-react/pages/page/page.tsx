import React, { ReactNode } from 'react';
import urljoin from 'url-join';
import { Helmet } from 'react-helmet';
import { useLocation } from '@teambit/base-react.navigation.link';

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

// TODO - receive these values from application context
const values = {
  siteOrigin: 'https://bit.dev',
  twitterUserName: '@bitdev_',
};

export function Page({ children, title, description, ...rest }: PageProps) {
  const { pathname = '' } = useLocation() || {};
  let canonicalUrl = urljoin(values.siteOrigin, pathname);
  // trailing '/' are ignored
  if (canonicalUrl.endsWith('/')) canonicalUrl = canonicalUrl.slice(0, -1);

  return (
    <div {...rest}>
      <Helmet>
        {/* only add what is needed */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* open graph metadata - https://ogp.me/ */}
        {/* canonical url and OG id. Must include https?:// */}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="https://static.bit.cloud/og-images/bit-marketing-og-img-facebook.png" />
        {/* optional og properties */}
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="bit.dev" />

        {/* twitter metadata */}
        {/*
         * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
         * https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#started
         * When the Twitter card processor looks for tags on a page, it first checks for the Twitter-specific property,
         * and if not present, falls back to the supported Open Graph property. This allows for both to be defined on the page independently,
         * and minimizes the amount of duplicate markup required to describe content and experience.
         */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={values.twitterUserName} />
        {/* custom twitter image */}
        <meta name="twitter:image" content="https://static.bit.cloud/og-images/bit-marketing-og-img-twitter.png" />
        {/* <meta property="twitter:title" content={title} /> */}
        {/* <meta property="twitter:description" content={description} /> */}
      </Helmet>
      {children}
    </div>
  );
}
