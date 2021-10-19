import React from 'react';
import classNames from 'classnames';
import {
  Heading as BaseHeading,
  HeadingProps as BaseHeadingProps,
  Elements
} from '@teambit/design.ui.content.heading';
import sizes from './heading-sizes.module.scss';
import styles from './heading.module.scss';

export const highlightClass = styles.highlight;

// TODO: oded please note that `Size` is a design thing and `h` is a schematic one.
// they should probably not be coupled to each other.
export type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  /**
   * highlight the heading.
   */
  highlight?: boolean;

  /**
   * override heading size using the existing pallete
   */
  size?: Sizes;
} & BaseHeadingProps;

export function Heading({
  highlight,
  children,
  className,
  element = Elements.H1,
  size,
  ...rest
}: HeadingProps) {
  const highlightClass = highlight ? styles.highlight : '';

  return (
    <BaseHeading
      className={classNames(
        styles.heading,
        sizes.heading,
        sizes[size || element],
        className,
        highlightClass
      )}
      element={element}
      {...rest}
    >
      {children}
    </BaseHeading>
  );
}
