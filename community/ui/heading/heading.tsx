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
   * highlight the heading.
   */
  highlight?: boolean,

  /**
   * element to use. default is `h1`
   */
  element?: Elements
} & React.HTMLAttributes<HTMLDivElement>;

export function Heading({ highlight, children, element, className, ...rest }: HeadingProps) {
  const Element = `${element}` as any;
  const highlightClass = highlight ? styles.highlight : '';

  return (
    <Element className={classNames(styles.heading, className, highlightClass)} {...rest}>
      {children}
    </Element>
  );
}

Heading.defaultProps = {
  element: Elements.H1
};
