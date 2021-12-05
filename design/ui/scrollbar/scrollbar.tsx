import React from 'react';
import classNames from 'classnames';
import styles from './scrollbar.module.scss';

export const scrollbarAllClass = styles.scrollbarAll;
export const scrollbarSelfClass = styles.scrollbarSelf;

export type ScrollbarProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Scrollbar({ children, className, ...rest }: ScrollbarProps) {
  const isWindows = window.navigator.platform.indexOf('Win') > -1;

  return (
    <div className={classNames(isWindows && scrollbarSelfClass, className)} {...rest}>
      {children}
    </div>
  );
}
