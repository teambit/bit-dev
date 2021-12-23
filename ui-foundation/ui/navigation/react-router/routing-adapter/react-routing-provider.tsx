import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { RouterProvider, RouterContextType } from '@teambit/base-react.navigation.router-context';
import { ReactRouterLink } from './implementation/link';
import { ReactRouterNavLink } from './implementation/nav-link';
import { useNavigate } from './implementation/use-navigate';

export { useLocation };

export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  NavLink: ReactRouterNavLink,
  useLocation,
  useNavigate,
};

export type ReactRouterRoutingProviderProps = {
  children: ReactNode;
};

/** wrap your code with this adapter to use React Router 5 as your Routing system */
export function ReactRouterRoutingProvider({ children }: ReactRouterRoutingProviderProps) {
  return <RouterProvider value={reactRouterAdapter}>{children}</RouterProvider>;
}
