import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';
// TODO: Oded
// import { MemoryRouter } from '@teambit/community.ui.router.router-provider';
import { lazy } from '@loadable/component';
// import { Docs } from './docs';

const QuickStart = lazy(() => import('@teambit/docs.content.quick-start'));
const ThinkingInComponents = lazy(() => import('@teambit/docs.content.thinking-in-components'));
const CreateWorkspace = lazy(() => import('@teambit/docs.content.getting-started.create-workspace'));
const CreateComponents = lazy(() => import('@teambit/community.content.getting-started.composing.create-components'));
const ComponentConfig = lazy(() => import('@teambit/component.content.component-config'));

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

// export const BasicDocs = () => (
//   <MemoryRouter>
//     <Docs baseUrl="/" contents={[{ routes }]} primaryLinks={primaryRoutes} />
//   </MemoryRouter>
// );
