import React from 'react';
import { Elements } from './elements';
import styles from './heading.module.scss';

export type HeadingProps = {
  /**
   * a text to be rendered in the component.
   */
  children: string

  /**
   * element to use. default is `h1`
   */
  element?: Elements
};

export function Heading({ children, element }: HeadingProps) {
  const Element = `${element}` as keyof JSX.IntrinsicElements;

  return (
    <Element className={styles.heading}>
      {children}
    </Element>
  );
}

Heading.defaultProps = {
  element: Elements.H1
};
