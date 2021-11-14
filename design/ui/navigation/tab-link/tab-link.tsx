import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { NavLink as BaseNavLink, NavLinkProps as TabLinkProps } from '@teambit/base-react.navigation.link';
import styles from './tab-link.module.scss';

export type { TabLinkProps };

export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ className, activeClassName, ...rest }: TabLinkProps, ref) => {
    return (
      <BaseNavLink
        className={classNames(styles.tabLink, className)}
        activeClassName={classNames(styles.active, activeClassName)}
        {...rest}
        ref={ref}
      />
    );
  }
);
