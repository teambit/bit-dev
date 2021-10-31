import React, { useContext } from 'react';
import { SidebarProvider } from './sidebar-context-provider';
import { SidebarContext } from './sidebar-context';

export function MockComponent() {
  const theme = useContext(SidebarContext);

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>;
}

export const BasicThemeUsage = () => (
  // return (
  <SidebarProvider>
    <MockComponent />
  </SidebarProvider>
  // );
);
