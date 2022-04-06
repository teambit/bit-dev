import React, { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import type { MDXProviderComponents } from '@teambit/mdx.ui.mdx-layout';
import { h1 as H1, h2 as H2, h3 as H3 } from '@teambit/documenter.markdown.heading';
import { Link } from '@teambit/design.ui.navigation.link';
import styles from './doc-page.module.scss';

const getTextLink = (element: ReactNode) =>
  typeof element === 'string' ? element.trim().toLowerCase().replace(/ /g, '-') : undefined;

export const mdxComponents = (baseUrl: string, selectorClassName?: string): MDXProviderComponents => {
  return {
    wrapper: 'div',
    h1: ({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) => (
      <H1 className={classNames(selectorClassName, className, styles.heading)} link={getTextLink(children)} {...rest}>
        {children}
      </H1>
    ),
    h2: ({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) => (
      <H2 className={classNames(styles.heading, selectorClassName, className)} link={getTextLink(children)} {...rest}>
        {children}
      </H2>
    ),
    h3: ({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) => (
      <H3 className={classNames(selectorClassName, className, styles.heading)} link={getTextLink(children)} {...rest}>
        {children}
      </H3>
    ),
    pre: ({ children }: any) => {
      return <pre>{children}</pre>;
    },
    a: ({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isExternal = href?.startsWith('http'); 
      const onlyHash = href?.startsWith('#'); 

      const getTarget = () => {
        if(isExternal || onlyHash) return href; // for https://bit.cloud or #collaborate
        return `${baseUrl}${href}`; // /quick-start -> /docs/quick-start
      }

      const target = getTarget();
      return <Link native={!!onlyHash} href={target} external={!!isExternal} {...rest} />;
    },
  };
};
