import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { RouterProvider, RouterContextType } from '@teambit/base-react.navigation.router-context';
import { ReactRouterLink, ReactRouterNavLink } from '@teambit/ui-foundation.ui.navigation.react-router.link';

export const reactRouterAdapter: RouterContextType = {
  Link: ReactRouterLink,
  NavLink: ReactRouterNavLink,
  useLocation,
};

type ReactRouterRoutingProviderProps = {
  children: ReactNode;
  /** automatically add a BrowserRouter context  */
  useBrowserRouter?: boolean;

  // consider passing a function to calculate the display
  /**
   * Set a virtual baseUrl for all the internal links in the application.
   * This will only effect the DOM value, but not the ReactRouter target.
   *
   * @example '/pricing/' -> 'https://bit.dev/pricing' //when baseUrl is https://bit.dev
   */
  displayUrl?: string;
};

/** wrap your code with this adapter to use React Router 5 as your Routing system */
export function ReactRouterRoutingProvider({ children }: ReactRouterRoutingProviderProps) {
  return <RouterProvider value={reactRouterAdapter}>{children}</RouterProvider>;
}
