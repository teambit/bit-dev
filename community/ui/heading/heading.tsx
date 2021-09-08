import React from 'react';
import classNames from 'classnames';
import { Elements } from './elements';
import styles from './heading.module.scss';

export type HeadingProps = {
  /**
   * a text to be rendered in the component.
   */
  children: string,

  /**
   * element to use. default is `h1`
   */
  element?: Elements
} & React.HTMLAttributes<HTMLDivElement>;

export function Heading({ children, element, className }: HeadingProps) {
  const Element = `${element}` as keyof JSX.IntrinsicElements;

  return (
    <Element className={classNames(styles.heading, className)}>
      {children}
    </Element>
  );
}

Heading.defaultProps = {
  element: Elements.H1
};
