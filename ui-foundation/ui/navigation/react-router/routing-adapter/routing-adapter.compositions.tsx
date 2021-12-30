import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { RouterProvider, useLocation } from '@teambit/base-react.navigation.router-context';
import { NavLink } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from './react-routing-provider';
import { ReactRouterNavLink } from './components/nav-link';

// this verifies Links from RouterProvider are working correctly
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

// this verifies the implementation of the react react links behaves as expected
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
