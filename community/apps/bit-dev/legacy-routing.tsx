// ADAPTER!!
// PROVIDING THE _LEGACY_ SYSTEM WITH THE CURRENT REACT-ROUTER COMPONENTS

import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { RoutingProvider, Routing } from '@teambit/base-ui.routing.routing-provider';
import { ReactRouterLink, ReactRouterNavLink } from '@teambit/ui-foundation.ui.navigation.react-router.link';

// React Router Link and NavLink are internal implementations of our isomorphic routing components.
// do not use them! use these instead:
// * @teambit/base-ui.routing.link
// * @teambit/base-ui.routing.nav-link

export const legacyRouting: Routing = { Link: ReactRouterLink, NavLink: ReactRouterNavLink, useLocation };

export function LegacyRoutingProvider({ children }: { children?: ReactNode }) {
  return <RoutingProvider value={legacyRouting}>{children}</RoutingProvider>;
}
