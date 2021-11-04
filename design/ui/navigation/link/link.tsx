import React from 'react';
import classNames from 'classnames';
import { Link as BaseLink, LinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export type { LinkProps };

export function Link({ className, ...rest }: LinkProps) {
  return <BaseLink className={classNames(styles.link, className)} {...rest} />;
}
