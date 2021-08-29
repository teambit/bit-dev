import React from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './page-frame.module.scss';

export type CenterColumnProps = {
  children?: ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>;

export function CenterColumn({ children, className, ...rest }: CenterColumnProps) {
  return <div className={classNames(styles.centerColumn, className)} {...rest}>{children}</div>;
}
