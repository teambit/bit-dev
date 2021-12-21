import React, { ReactNode } from 'react';
import { useLocation, MemoryRouter as ReactMemoryRouter } from 'react-router-dom';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { NavLink } from '@teambit/ui-foundation.ui.react-router.nav-link';
import { Link } from '@teambit/ui-foundation.ui.react-router.link';

const routing = { Link, NavLink, useLocation };

export type MemoryRouterProps = {
  children: ReactNode;
};

export function MemoryRouter({ children }: MemoryRouterProps) {
  return (
    <RoutingProvider value={routing}>
      <ReactMemoryRouter>{children}</ReactMemoryRouter>
    </RoutingProvider>
  );
}
