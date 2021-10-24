import React from 'react';
import {
  useRouter,
  LinkProps,
  NavigationLinkProps,
} from '@teambit/base-react.navigation.router-context';
import { NativeLink, NativeNavLink } from './native-link';

export type { LinkProps, NavigationLinkProps };

/** implementation agnostic Link component, basic on the standard `a` tag */
export function Link(props: LinkProps) {
  const { Link = NativeLink } = useRouter();

  if (props.native || props.external) {
    return <NativeLink {...props} />;
  }

  return <Link {...props} />;
}

export function NavLink(props: NavigationLinkProps) {
  const { NavLink = NativeNavLink } = useRouter();

  if (props.native || props.external) {
    return <NativeNavLink {...props} />;
  }

  return <NavLink {...props} />;
}
