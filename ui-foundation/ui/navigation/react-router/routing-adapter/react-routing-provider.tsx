import { useLocation, useNavigate } from 'react-router-dom';

import type { RouterContextType, UseLocation } from '@teambit/base-react.navigation.router-context';
import { ReactRouterLink } from './components/link';
import { ReactRouterNavLink } from './components/nav-link';

export { useLocation, useNavigate };

export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  NavLink: ReactRouterNavLink,
  // RR6 state type is `unknown`, which is ok
  useLocation: useLocation as UseLocation,
  useNavigate,
};
