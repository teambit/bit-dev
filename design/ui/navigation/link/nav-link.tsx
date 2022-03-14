import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export type { LinkProps };

export const NavLink = forwardRef<HTMLAnchorElement, LinkProps>(({ className, ...rest }: LinkProps, ref) => {
  return <Link className={classNames(styles.link, className)} {...rest} ref={ref} />;
});
