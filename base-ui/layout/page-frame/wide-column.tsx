import React from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './page-frame.module.scss';

export type WideColumnProps = {
  children?: ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>;

export function WideColumn({ children, className, ...rest }: WideColumnProps) {
  return <div className={classNames(styles.wideColumn, className)} {...rest}>{children}</div>;
}
