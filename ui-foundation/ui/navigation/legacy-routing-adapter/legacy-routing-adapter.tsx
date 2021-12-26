import React, { ReactNode, forwardRef, useMemo } from 'react';
import { useRouter } from '@teambit/base-react.navigation.router-context';
import { RoutingProvider, Routing } from '@teambit/base-ui.routing.routing-provider';
import { NativeNavLink, NavLinkProps as LegacyNavLinkProps } from '@teambit/base-ui.routing.native-nav-link';
import { NativeLink, LinkProps as LegacyLinkProps } from '@teambit/base-ui.routing.native-link';

const LinkAdapter = forwardRef<HTMLAnchorElement, LegacyLinkProps>(({ external, ...props }: LegacyLinkProps, ref) => {
  const { Link } = useRouter();

  if (external || !Link) {
    // legacy is missing ref support
    return <NativeLink /* ref={ref} */ {...props} external={external} />;
  }
  return <Link ref={ref} {...props} />;
});

const NavLinkAdapter = forwardRef<HTMLAnchorElement, LegacyNavLinkProps>(
  ({ external, isActive, ...props }: LegacyNavLinkProps, ref) => {
    const { NavLink } = useRouter();

    if (external || !NavLink) {
      // legacy is missing ref support
      return <NativeNavLink /* ref={ref} */ {...props} external={external} isActive={isActive} />;
    }

    const active = isActive?.();
    return <NavLink ref={ref} {...props} active={active} />;
  }
);

// this is just a fallback,
// will only be used if run outside of react-router and the browser
export const defaultLocation = { pathname: '/', search: '', hash: '' };

function defaultUseLocation() {
  return typeof window !== 'undefined' ? window.location : defaultLocation;
}

export function LegacyNavigationAdapter({ children }: { children?: ReactNode }) {
  const routing = useRouter();
  const legacyRouting: Routing = useMemo(
    () => ({
      Link: LinkAdapter,
      NavLink: NavLinkAdapter,
      useLocation: routing.useLocation || defaultUseLocation,
    }),

    [routing]
  );

  return <RoutingProvider value={legacyRouting}>{children}</RoutingProvider>;
}
