import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from '@teambit/base-react.navigation.link';
import styles from './tab-link.module.scss';

export type TabLinkProps = {
  borderPosition?: 'top' | 'bottom' | 'left' | 'right';
} & LinkProps;

/**
 * A component used to display a nav link, usually used in headers or tabs to display a specific active ui
 */
export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ className, activeClassName, children, borderPosition = 'bottom', ...rest }: TabLinkProps, ref) => {
    return (
      <Link
        data-position={borderPosition}
        className={classNames(styles.tabLink, className)}
        activeClassName={classNames(styles.active, activeClassName)}
        {...rest}
        ref={ref}
      >
        <div>{children}</div>
      </Link>
    );
  }
);
