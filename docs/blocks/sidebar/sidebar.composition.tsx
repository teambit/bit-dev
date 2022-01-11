import React from 'react';
import { DocsRoutes } from '@teambit/docs.entities.docs-routes';
import { gettingStartedDocsRoutes, primaryRoutes } from './sidebar.mock';
import { Sidebar } from './sidebar';


const sections = [
  {
    title: 'GETTING STARTED',
    routes: DocsRoutes.from(gettingStartedDocsRoutes, '/'),
  },
  {
    title: 'LEARN',
    routes: DocsRoutes.from(gettingStartedDocsRoutes, '/'),
  },
];
const primary = DocsRoutes.from(primaryRoutes, '').toSideBarTree();

export const SidebarExample = () => <Sidebar data-testid="sidebar-example" style={{ width: 300 }} primaryLinks={primary} sections={sections} />;

SidebarExample.canvas = {
    width: 300,
    height: 500
}