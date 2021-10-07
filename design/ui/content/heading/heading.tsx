import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Elements } from './elements';
import sizes from './heading-sizes.module.scss';
import styles from './heading.module.scss';

export type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode;
  /**
   * element to use. default is `h1`
   */
  element?: Elements;
  /**
   * element to use. default is `h1`
   */
  size?: Sizes;
} & React.HTMLAttributes<HTMLDivElement>;

export function Heading({ children, element = Elements.H1, className, size, ...rest }: HeadingProps) {
  const Element = `${element}` as any;
  const elementSize = size || element || 'h1';

  return (
    <Element className={classNames(styles.heading, sizes[elementSize], className)} {...rest}>
      {children}
    </Element>
  );
}
