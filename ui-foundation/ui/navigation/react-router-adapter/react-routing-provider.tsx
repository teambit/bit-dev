import { useLocation } from 'react-router-dom';
import { RouterContextType, UseLocation } from '@teambit/base-react.navigation.link';
import { ReactRouterLink } from './react-router-link';

export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  useLocation: useLocation as UseLocation,
};
