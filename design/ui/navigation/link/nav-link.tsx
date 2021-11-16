import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { NavLink as BaseNavLink, NavLinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export type { NavLinkProps };

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, ...rest }: NavLinkProps, ref) => {
    return (
      <BaseNavLink
        className={classNames(styles.link, className)}
        activeClassName={activeClassName}
        {...rest}
        ref={ref}
      />
    );
  }
);
