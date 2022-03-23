import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './grid.module.scss';

export type GridProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode;

  /**
   * gap between grid cells.
   */
  gridGap?: string;

  /**
   * gap between columns.
   */
  columnGap?: string;

  /**
   * width of a certain cell in the grid.
   */
  minColumnWidth?: string;

  /**
   * class name to inject.
   */
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Grid({
  children,
  gridGap,
  columnGap,
  minColumnWidth,
  className,
  ...rest
}: GridProps) {
  return (
    <div
      style={
        {
          '--grid-gap': gridGap,
          '--column-gap': columnGap,
          '--min-column-width': minColumnWidth,
        } as CSSProperties
      }
      className={classNames(styles.grid, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
