import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { LinkedHeading, Sizes } from '@teambit/documenter.ui.linked-heading';
import type { LinkedHeadingProps } from '@teambit/documenter.ui.linked-heading';
import styles from './create-heading.module.scss';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export function createHeading(size: Sizes) {
  return function Heading({ children, className, ...rest }: HeadingProps & LinkedHeadingProps) {
    const isMainHeading = size === 'lg' || size === 'md';
    return (
      <LinkedHeading
        {...rest}
        className={classnames(className, styles.mdxLinkedHeading, isMainHeading && styles.mainHeadingStyles)}
        size={size}
      >
        {children}
      </LinkedHeading>
    );
  };
}

export const h1 = createHeading('lg');
export const h2 = createHeading('md');
export const h3 = createHeading('sm');
export const h4 = createHeading('xs');
export const h5 = createHeading('xxs');
export const h6 = createHeading('xxs');
