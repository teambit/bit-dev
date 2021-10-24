import React, { useMemo, useCallback } from 'react';
import { Link as BaseLink, NavLink as BaseNavLink } from 'react-router-dom';
import { parsePath } from 'history';
import type {
  LinkProps,
  NavigationLinkProps,
} from '@teambit/base-react.navigation.router-context';

export type { LinkProps, NavigationLinkProps };

/**
 /** Adapter between React router's Link and our isomorphic link components. Learn more [Here](https://bit.dev/teambit/base-react/navigation/router-context)
 */
export function Link({
  href = '',
  state,

  // props we should not get, and should not pass to RR link:
  external,
  native,
  ...rest
}: LinkProps) {
  const to = useMemo(() => ({ ...parsePath(href), state }), [href, state]);

  // @ts-ignore (https://github.com/teambit/bit/issues/4401)
  return <BaseLink to={to} {...rest} />;
}

export function NavLink({
  href = '',
  state,
  active,

  // props we should not get, and should not pass to RR link:
  external,
  native,
  ...rest
}: NavigationLinkProps) {
  const to = useMemo(() => ({ ...parsePath(href), state }), [href, state]);

  const isActive = useMemo(() => {
    if (active === undefined) return undefined;

    return () => active;
  }, [active]);

  // @ts-ignore (https://github.com/teambit/bit/issues/4401)
  return <BaseNavLink to={to} isActive={isActive} {...rest} />;
}
