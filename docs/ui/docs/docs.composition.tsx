import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';
import { Docs } from './docs';

const primaryRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    icon: 'lightning',
    title: 'Quick Start',
    description: 'Quick Start',
    component: <div />,
  },
  {
    path: 'thinking-in-components',
    icon: 'Lightbulb-thinking',
    title: 'Thinking in components',
    component: <div />,
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
        component: <div />,
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
        component: <div />,
      },
      {
        path: 'component-config',
        title: 'Component Configuration',
        component: <div />,
      },
    ],
  },
];

export const BasicDocs = () => <Docs baseUrl="/" contents={[{ routes }]} primaryLinks={primaryRoutes} />;
