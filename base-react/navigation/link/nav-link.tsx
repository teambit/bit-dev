import React from 'react';
import { useRouter, NavLinkProps } from '@teambit/base-react.navigation.router-context';
import { NativeNavLink } from './native-link';

export { NavLinkProps };

export function NavLink(props: NavLinkProps) {
  const router = useRouter();
  const ActualNavLink = router.NavLink || NativeNavLink;

  if (props.native || props.external) {
    return <NativeNavLink {...props} />;
  }

  return <ActualNavLink {...props} />;
}
