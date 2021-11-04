import React, { ReactNode } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import { Noop } from '@teambit/base-ui.elements.noop';

import { RouterProvider, RouterContextType } from '@teambit/base-react.navigation.router-context';
import { Link, NavLink } from '@teambit/ui-foundation.ui.navigation.react-router.link';
import { LinkContextProvider } from '@teambit/ui-foundation.ui.navigation.react-router.link-anchor';

import { useReactRouterHref } from './use-react-router-href';

export const reactRouterAdapter: RouterContextType = {
  Link,
  NavLink,
  useLocation,
  useHref: useReactRouterHref,
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
export function ReactRouterRoutingProvider({
  children,
  useBrowserRouter = false,
  displayUrl,
}: ReactRouterRoutingProviderProps) {
  const RouterComponent = useBrowserRouter ? BrowserRouter : Noop;

  return (
    <RouterComponent>
      <LinkContextProvider baseUrl={displayUrl}>
        <RouterProvider value={reactRouterAdapter}>{children}</RouterProvider>
      </LinkContextProvider>
    </RouterComponent>
  );
}
