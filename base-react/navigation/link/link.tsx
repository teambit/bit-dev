import React from 'react';
import { useRouter, LinkProps, NavLinkProps } from '@teambit/base-react.navigation.router-context';
import { NativeLink, NativeNavLink } from './native-link';

export type { LinkProps, NavLinkProps };

/** implementation agnostic Link component, basic on the standard `a` tag */
export function Link(props: LinkProps) {
  const router = useRouter();
  const ActualLink = router.Link || NativeLink;

  if (props.native || props.external) {
    return <NativeLink {...props} />;
  }

  return <ActualLink {...props} />;
}

export function NavLink(props: NavLinkProps) {
  const router = useRouter();
  const ActualNavLink = router.NavLink || NativeNavLink;

  if (props.native || props.external) {
    return <NativeNavLink {...props} />;
  }

  return <ActualNavLink {...props} />;
}
