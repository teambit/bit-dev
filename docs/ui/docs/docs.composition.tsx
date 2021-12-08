import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { SidebarProvider } from '@teambit/design.ui.sidebar.sidebar-context';
import { useLocation, MemoryRouter } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.react-router.link';
import { NavLink } from '@teambit/ui-foundation.ui.react-router.nav-link';
import { lazy } from '@loadable/component';
import { Docs } from './docs';

const QuickStart = lazy(() => import('@teambit/docs.content.quick-start'));
const ThinkingInComponents = lazy(() => import('@teambit/docs.content.thinking-in-components'));
const CreateWorkspace = lazy(() => import('@teambit/docs.content.getting-started.create-workspace'));
const CreateComponents = lazy(() => import('@teambit/community.content.getting-started.composing.create-components'));
const ComponentConfig = lazy(() => import('@teambit/component.content.component-config'));

const routing = { Link, NavLink, useLocation };

const primaryRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    icon: 'lightning',
    title: 'Quick Start',
    description: 'Quick Start',
    component: <QuickStart />,
  },
  {
    path: 'thinking-in-components',
    icon: 'Lightbulb-thinking',
    title: 'Thinking in components',
    component: <ThinkingInComponents />,
  },
];

const routes: DocsRoute[] = [
  {
    path: 'installation',
    title: 'Installation',
    children: [
      {
        path: 'start-bit-project',
        title: 'Start a new Bit Workspace',
        component: <CreateWorkspace />,
      },
    ],
  },
  {
    path: 'components',
    title: 'Components',
    component: <div />,
    children: [
      {
        path: 'creating-components',
        title: 'Creating components',
        component: <CreateComponents />,
      },
      {
        path: 'component-config',
        title: 'Component Configuration',
        component: <ComponentConfig />,
      },
    ],
  },
];

export const BasicDocs = () => (
  <RoutingProvider value={routing}>
    <SidebarProvider>
      <MemoryRouter>
        <Docs baseUrl="/" contents={[{ routes }]} primaryLinks={primaryRoutes} />
      </MemoryRouter>
    </SidebarProvider>
  </RoutingProvider>
);