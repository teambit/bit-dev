import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { RouterProvider } from '@teambit/base-react.navigation.router-context';
import { useLocation } from '@teambit/base-react.navigation.use-location';
import { NavLink } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from './react-routing-provider';

export const RoutingAdapterPreview = () => (
  <MemoryRouter>
    <RouterProvider value={reactRouterAdapter}>
      <SomeLinks />
    </RouterProvider>
  </MemoryRouter>
);

function SomeLinks() {
  const location = useLocation();

  return (
    <div>
      <div>location: {JSON.stringify(location, undefined, 1)}</div>

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
    </div>
  );
}
