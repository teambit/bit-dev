import React, { ReactNode } from 'react';
import { MemoryRouter as ReactMemoryRouter } from 'react-router-dom';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { legacyRouting } from './legacy-routing';

export type MemoryRouterProps = {
  children: ReactNode;
};

export function MemoryRouter({ children }: MemoryRouterProps) {
  return (
    <RoutingProvider value={legacyRouting}>
      <ReactMemoryRouter>{children}</ReactMemoryRouter>
    </RoutingProvider>
  );
}
