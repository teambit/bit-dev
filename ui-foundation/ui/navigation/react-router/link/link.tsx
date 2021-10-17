import React from 'react';
import { Link as BaseLink, NavLink } from 'react-router-dom';
import type { LinkProps as BaseLinkProps } from '@teambit/base-react.navigation.link';

export type LinkProps = {} & BaseLinkProps;

/**
 *
 * translates base-react props to react-router link
 */
export function Link({
  href,
  state,
  activeStyle,
  activeClassName,
  isActive,
  ...rest
}: LinkProps) {
  if (activeStyle || activeClassName) {
    // TODO - consider separating nav-link from link or pass an extra prop to separate the two. going by class or styles seems unstable
    return (
      <NavLink
        to={{ pathname: href, state }}
        activeStyle={activeStyle}
        activeClassName={activeClassName}
        isActive={isActive ? () => isActive : undefined} // TODO - improve this
        {...rest}
      />
    );
  }
  return <BaseLink to={{ pathname: href, state }} {...rest} />;
}
