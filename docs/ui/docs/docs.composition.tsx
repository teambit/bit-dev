import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';
import loadable from '@loadable/component';
import { MemoryRouter } from '@teambit/community.ui.router.router-provider';
import { Docs } from './docs';

const QuickStart = loadable(() => import('@teambit/docs.content.quick-start'));
const ThinkingInComponents = loadable(() => import('@teambit/docs.content.thinking-in-components'));
const CreateWorkspace = loadable(() => import('@teambit/docs.content.getting-started.create-workspace'));
const CreateComponents = loadable(
  () => import('@teambit/community.content.getting-started.composing.create-components')
);
const ComponentConfig = loadable(() => import('@teambit/component.content.component-config'));

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
  <MemoryRouter>
    <Docs baseUrl="/" contents={[{ routes }]} primaryLinks={primaryRoutes} />
  </MemoryRouter>
);
