import React from 'react';
import classNames from 'classnames';
import { NavLink as BaseNavLink, NavLinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export { NavLinkProps };

export function NavLink({ className, activeClassName, ...rest }: NavLinkProps) {
  return <BaseNavLink className={classNames(styles.link, className)} activeClassName={activeClassName} {...rest} />;
}
