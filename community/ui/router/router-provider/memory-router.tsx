import React, { ReactNode } from 'react';
import { RouterProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { MemoryRouter as ReactMemoryRouter } from 'react-router-dom';

export type MemoryRouterProps = {
  children: ReactNode;
};

export function MemoryRouter({ children }: MemoryRouterProps) {
  return (
    <RouterProvider implementation={reactRouterAdapter}>
      <ReactMemoryRouter>{children}</ReactMemoryRouter>
    </RouterProvider>
  );
}
