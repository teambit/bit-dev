import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { RouterProvider, RouterContextType } from '@teambit/base-react.navigation.router-context';
import { ReactRouterLink, ReactRouterNavLink } from '@teambit/ui-foundation.ui.navigation.react-router.link';

export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  NavLink: ReactRouterNavLink,
  useLocation,
};

export type ReactRouterRoutingProviderProps = {
  children: ReactNode;
};

/** wrap your code with this adapter to use React Router 5 as your Routing system */
export function ReactRouterRoutingProvider({ children }: ReactRouterRoutingProviderProps) {
  return <RouterProvider value={reactRouterAdapter}>{children}</RouterProvider>;
}
