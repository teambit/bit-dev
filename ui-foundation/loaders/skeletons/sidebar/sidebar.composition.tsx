import React from 'react';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => (
  <Sidebar data-testid="sidebar-skeleton" />
);


BasicSidebar.canvas = {
  maxHeight: 400,
  display: 'flex',
  alignItems: 'end'
}