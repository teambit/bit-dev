import React from 'react';
import { MemoryRouter, Route, useLocation } from 'react-router-dom';
import { ReactRouterLink } from './link';

export const Preview = () => (
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
        <ReactRouterLink href="/path/one?what=is" state={{ some: 'state' }}>
          link1
        </ReactRouterLink>
        <br />
        link: <ReactRouterLink href="/path/two">link2</ReactRouterLink>
      </div>

      <Route path="/path/one">First path</Route>
      <Route path="/path/two">Second path</Route>
    </div>
  );
}
