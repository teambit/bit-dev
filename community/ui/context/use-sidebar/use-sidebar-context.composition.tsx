import React, { useContext } from 'react';
import { UseSidebarProvider } from './use-sidebar-context-provider';
import { UseSidebarContext } from './use-sidebar-context';

export function MockComponent() {
  const theme = useContext(UseSidebarContext);

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>;
}

export const BasicThemeUsage = () => (
  // return (
  <UseSidebarProvider color="blue">
    <MockComponent />
  </UseSidebarProvider>
  // );
);
