import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Link as BaseLink, LinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export type { LinkProps };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ className, ...rest }: LinkProps, ref) {
  return <BaseLink className={classNames(styles.link, className)} {...rest} ref={ref} />;
});