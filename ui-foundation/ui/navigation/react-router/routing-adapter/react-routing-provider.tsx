import React, { useMemo } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { RouterContextType, LinkProps, NavLinkProps } from '@teambit/base-react.navigation.routing-provider';

export function RouterLink(props: LinkProps) {
  return <Link to={props.href || ''} {...props} />;
}

export function RouterNavLink(props: NavLinkProps) {
  const isActive = useMemo(() => {
    if (props.active === undefined) return undefined;

    return () => Boolean(props.active);
  }, [props.active]);

  return <NavLink to={props.href || ''} isActive={isActive} {...props} />;
}

export const reactRouterAdapter: RouterContextType = {
  Link: RouterLink,
  NavLink: RouterNavLink,
  useLocation,
};
