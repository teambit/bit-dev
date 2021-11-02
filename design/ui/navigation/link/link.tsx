import React from 'react';
import classNames from 'classnames';
import { Link as BaseLink, LinkProps, NavLink as BaseNavLink, NavLinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export type { LinkProps, NavLinkProps };

export function Link({ className, ...rest }: LinkProps) {
  return <BaseLink className={classNames(styles.link, className)} {...rest} />;
}

export function NavLink({ className, activeClassName, ...rest }: NavLinkProps) {
  return <BaseNavLink className={classNames(styles.link, className)} activeClassName={activeClassName} {...rest} />;
}
