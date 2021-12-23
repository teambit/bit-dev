import React, { forwardRef, useMemo } from 'react';
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
  const isActive = useMemo(() => (active === undefined ? undefined : () => active), [active]);

  return (
    <BaseNavLink to={to} isActive={isActive} ref={ref} {...rest}>
      {children}
    </BaseNavLink>
  );
});
