import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';
import { QuickStart } from '@teambit/docs.content.quick-start';
import { ThinkingInComponents } from '@teambit/docs.content.thinking-in-components';
import { Docs } from './docs';

export const primaryRoutes: DocsRoute[] = [
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
    component: <div />,
  },
  {
    path: 'components',
    title: 'Components',
    component: <div />,
  },
];

export const BasicDocs = () => <Docs baseUrl="/" routes={routes} primaryLinks={primaryRoutes} />;
