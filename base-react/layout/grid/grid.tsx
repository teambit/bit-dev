import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './grid.module.scss';

export type GridProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode,

  /**
   * class name to inject.
   */
className?: string
} & React.HTMLAttributes<HTMLDivElement>;

export function Grid({ children, className, ...rest }: GridProps) {
  return (
    <div className={classNames(styles.grid, className)} {...rest}>
      {children}
    </div>
  );
}
