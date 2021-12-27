import { useLocation } from 'react-router-dom';

import type { RouterContextType, UseLocation } from '@teambit/base-react.navigation.router-context';
import { ReactRouterLink } from './components/link';
import { ReactRouterNavLink } from './components/nav-link';
import { useNavigate } from './components/use-navigate';

export { useLocation };

/** React Router 5 implementation of our abstract routing system */
export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  NavLink: ReactRouterNavLink,
  // RR6 state type is `unknown`, which is ok
  useLocation: useLocation as UseLocation,
  useNavigate,
};
