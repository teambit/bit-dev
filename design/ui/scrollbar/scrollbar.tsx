import React from 'react';
import classNames from 'classnames';
import styles from './scrollbar.module.scss';

export const scrollbarAllClass = styles.scrollbarAll;
export const scrollbarSelfClass = styles.scrollbarSelf;

export type ScrollbarProps = {} & React.HTMLAttributes<HTMLDivElement>;

const isWindows = window.navigator.platform.indexOf('Win') > -1;

export function Scrollbar({ children, className, ...rest }: ScrollbarProps) {
  return (
    <div className={classNames(isWindows && scrollbarSelfClass, className)} {...rest}>
      {children}
    </div>
  );
}
