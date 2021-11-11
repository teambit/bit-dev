import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

/* Quick Start */
const QuickStart = loadable(() => import('@teambit/docs.content.quick-start'));
const ThinkingInComponents = loadable(() => import('@teambit/docs.content.thinking-in-components'));

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
