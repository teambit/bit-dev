import React, { forwardRef, useMemo } from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { parsePath } from 'history';
import { NavLinkProps } from '@teambit/base-react.navigation.router-context';
import { NavLink as DefaultNavLink } from '@teambit/base-react.navigation.link';

export type { NavLinkProps };

/**
 * Adapter between React router's NavLink and our isomorphic Navlink components. Learn more [Here](https://bit.dev/teambit/base-react/navigation/router-context)
 */
export const ReactRouterNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function ReactRouterNavLink(
  {
    href = '',
    state,
    active,
    // props we should not get, and should not pass to RR link:
    external,
    native,

    // rest
    ...rest
  }: NavLinkProps,
  ref
) {
  const to = useMemo(() => ({ ...parsePath(href), state }), [href, state]);

  const isActive = useMemo(() => {
    if (active === undefined) return undefined;

    return () => active;
  }, [active]);

  // support legacy routing - which doesn't handle external / native
  if (external || native) {
    const existingProps = { external, native, active, href, state };

    return <DefaultNavLink {...existingProps} ref={ref} {...rest} />;
  }

  // @ts-ignore (https://github.com/teambit/bit/issues/4401)
  return <BaseNavLink to={to} isActive={isActive} ref={ref} {...rest} />;
});
