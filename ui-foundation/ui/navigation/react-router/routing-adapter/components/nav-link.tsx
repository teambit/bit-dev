import React, { forwardRef, useMemo } from 'react';
import classnames from 'classnames';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { parsePath } from 'history';
import { NavLinkProps } from '@teambit/base-react.navigation.router-context';

export type { NavLinkProps };

/**
 * Adapter between React router's NavLink and our isomorphic Navlink components. Learn more [Here](https://bit.dev/teambit/base-react/navigation/router-context)
 */
export const ReactRouterNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function ReactRouterNavLink(
  {
    href = '',
    state,
    active,

    exact,
    strict, // no implementation in RR6
    activeClassName,
    activeStyle,
    className,
    style,
    children = null,

    // props we should not get, and should not pass to RR link:
    external,
    native,

    // rest
    ...rest
  }: NavLinkProps,
  ref
) {
  const to = useMemo(() => ({ ...parsePath(href), state }), [href, state]);

  // @ts-ignore (https://github.com/teambit/bit/issues/4401)
  return (
    <BaseNavLink
      to={to}
      ref={ref}
      end={exact}
      style={({ isActive }) => ({ ...style, ...((active ?? isActive) && activeStyle) })}
      className={({ isActive }) => classnames(className, (active ?? isActive) && activeClassName)}
      {...rest}
    >
      {children}
    </BaseNavLink>
  );
});
