import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { RouterProvider } from '@teambit/base-react.navigation.router-context';
import { useLocation } from '@teambit/base-react.navigation.use-location';
import { NavLink } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from './react-routing-provider';
import { ReactRouterNavLink } from './implementation/nav-link';

export const RoutingAdapterPreview = () => (
  <MemoryRouter>
    <RouterProvider value={reactRouterAdapter}>
      <CurrentLocation />
      <div>
        link:{' '}
        <NavLink href="/path/one?what=is" state={{ some: 'state' }}>
          link1
        </NavLink>
        <br />
        link: <NavLink href="/path/two">link2</NavLink>
      </div>

      <Route path="/path/one">First path</Route>
      <Route path="/path/two">Second path</Route>
    </RouterProvider>
  </MemoryRouter>
);

export const ReactRouterLinkPreview = () => (
  <MemoryRouter>
    <div>
      link:{' '}
      <ReactRouterNavLink href="/path/one?what=is" state={{ some: 'state' }}>
        link1
      </ReactRouterNavLink>
      <br />
      link: <ReactRouterNavLink href="/path/two">link2</ReactRouterNavLink>
    </div>

    <Route path="/path/one">First path</Route>
    <Route path="/path/two">Second path</Route>
  </MemoryRouter>
);

function CurrentLocation() {
  const location = useLocation();

  return <div>location: {JSON.stringify(location, undefined, 1)}</div>;
}
