import React from 'react';
import { MemoryRouter, Route, useLocation } from 'react-router-dom';
import { ReactRouterNavLink } from './nav-link';

export const ReactRouterLinkPreview = () => (
  <MemoryRouter>
    <SomeLinks />
  </MemoryRouter>
);

function SomeLinks() {
  const location = useLocation();

  return (
    <div>
      <div>location: {JSON.stringify(location, undefined, 1)}</div>

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
    </div>
  );
}
