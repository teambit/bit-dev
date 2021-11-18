import React from 'react';
import classNames from 'classnames';
import styles from './cloud.module.scss';

export type CloudProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Cloud({ className, ...rest }: CloudProps) {
  return <div {...rest} className={classNames(styles.cloud, className)} />;
}
