import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import type { RouterContextType } from '@teambit/base-react.navigation.router-context';
import { ReactRouterLink } from './components/link';
import { ReactRouterNavLink } from './components/nav-link';
import { useNavigate } from './components/use-navigate';

export { useLocation };

/** React Router 5 implementation of our abstract routing system */
export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  NavLink: ReactRouterNavLink,
  useLocation,
  useNavigate,
};

export type ReactRouterRoutingProviderProps = {
  children: ReactNode;
};
