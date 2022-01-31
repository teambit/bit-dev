import React, { useMemo, forwardRef } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { parsePath } from 'history';
import { RouterContextType, LinkProps } from '@teambit/base-react.navigation.link';

const ReactRouterLink = forwardRef<HTMLAnchorElement, LinkProps>(function LinkWithRef(
  { href = '', state, active, native, external, ...props }: LinkProps,
  ref
) {
  const to = useMemo(() => ({ ...parsePath(href), state }), [href, state]);
  const isActive = useMemo(() => (active === undefined ? undefined : () => active), [active]);

  if (props.activeClassName || props.activeStyle) {
    // @ts-ignore (https://github.com/teambit/bit/issues/4401)
    return <NavLink {...props} isActive={isActive} to={to} ref={ref} />;
  }

  // @ts-ignore (https://github.com/teambit/bit/issues/4401)
  return <Link {...props} to={to} ref={ref} />;
});

export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  useLocation,
};
