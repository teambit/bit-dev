import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './top-down.module.scss';

export type TopDownProps = {
  /**
   * layout header panel.
   */
  header: ReactNode,
  
  /**
   * layout main panel. 
   */
  children: ReactNode
} & React.HTMLAttributes<HTMLElement>;

export function TopDown({ children, header, ...rest }: TopDownProps) {
  return (
    <section {...rest} className={classNames(styles.topDown, rest.className)}>
      <div>{header}</div>
      <div>{children}</div>
    </section>
  );
}
