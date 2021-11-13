import React from 'react';
import { sidebarMock, sidebarCategoryMock } from './sidebar.mock';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => <Sidebar style={{ width: 300 }} tree={sidebarMock} />;

export const CategorySidebar = () => (
  <Sidebar displayTitle="GETTING STARTED" style={{ width: 300 }} tree={sidebarCategoryMock} />
);
