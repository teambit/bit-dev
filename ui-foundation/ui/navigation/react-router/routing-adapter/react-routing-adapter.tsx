import React, { ReactNode } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import { Noop } from '@teambit/base-ui.elements.noop';

import {
  RouterProvider,
  RouterContextType,
} from '@teambit/base-react.navigation.router-context';
import {
  Link,
  NavLink,
} from '@teambit/ui-foundation.ui.navigation.react-router.link';

import { useReactRouterHref } from './use-react-router-href';

const reactRouterAdapter: RouterContextType = {
  Link,
  NavLink,
  useLocation: useLocation,
  useHref: useReactRouterHref,
};
type ReactRouterRoutingAdapterProps = {
  children: ReactNode;
  /* automatically add BrowserRouter (on by default) */
  useBrowserRouter?: boolean;
};

/** wrap your code with this adapter to use React Router 5 as your Routing system */
export function ReactRouterRoutingAdapter({
  children,
  useBrowserRouter = true,
}: ReactRouterRoutingAdapterProps) {
  const RouterComponent = useBrowserRouter ? BrowserRouter : Noop;

  return (
    <RouterComponent>
      <RouterProvider value={reactRouterAdapter}>{children}</RouterProvider>
    </RouterComponent>
  );
}
