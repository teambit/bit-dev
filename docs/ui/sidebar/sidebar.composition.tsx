import React from 'react';
import {sidebarMock} from './sidebar.mock';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => (
  <Sidebar
    style={{ width: 300 }}
    tree={sidebarMock}
  />
);
