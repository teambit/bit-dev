import React, { forwardRef, useMemo } from 'react';
import classnames from 'classnames';
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

  // support legacy routing - which doesn't handle external / native
  if (external || native) {
    const existingProps = { external, native, active, strict, href, state };

    return <DefaultNavLink {...existingProps} ref={ref} {...rest} />;
  }

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
