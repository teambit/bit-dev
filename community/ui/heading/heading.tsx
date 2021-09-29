import React from 'react';
import classNames from 'classnames';
import {
  Heading as BaseHeading,
  HeadingProps as BaseHeadingProps,
} from '@teambit/design.ui.content.heading';
import sizes from './heading-sizes.module.scss';
import styles from './heading.module.scss';

export type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  /**
   * highlight the heading.
   */
  highlight?: boolean;

  /**
   * element to use. default is `h1`
   */
  size?: Sizes;
} & BaseHeadingProps;

export function Heading({
  highlight,
  children,
  className,
  size,
  ...rest
}: HeadingProps) {
  const highlightClass = highlight ? styles.highlight : '';

  return (
    <BaseHeading
      className={classNames(
        styles.heading,
        sizes[size],
        className,
        highlightClass
      )}
      {...rest}
    >
      {children}
    </BaseHeading>
  );
}
