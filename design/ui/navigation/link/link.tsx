import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Link as BaseLink, LinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ className, ...rest }: LinkProps, ref) => {
  return <BaseLink className={classNames(styles.link, className)} {...rest} ref={ref} />;
});
