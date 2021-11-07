import React, { forwardRef } from 'react';
import { useRouter, NavLinkProps } from '@teambit/base-react.navigation.router-context';
import { NativeNavLink } from './native-link';

export type { NavLinkProps };

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(props: NavLinkProps, ref) {
  const router = useRouter();
  const ActualNavLink = router.NavLink || NativeNavLink;

  if (props.native || props.external) {
    return <NativeNavLink {...props} ref={ref} />;
  }

  return <ActualNavLink {...props} ref={ref} />;
});
