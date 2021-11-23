import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

/* Quick Start */
const QuickStart = React.lazy(() => import('@teambit/docs.content.quick-start'));
const ThinkingInComponents = React.lazy(() => import('@teambit/docs.content.thinking-in-components'));

export const primaryRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    icon: 'lightning',
    title: 'Quick Start',
    description:
      'Bit is a component build and collaboration framework. It helps teams build components together, and compose them into various features and apps. This allows to build anything in a component-driven architecture, from UI applications, backend services and even CLI tools.',
    component: <QuickStart />,
  },
  {
    path: 'thinking-in-components',
    icon: 'Lightbulb-thinking',
    title: 'Thinking in Components',
    description:
      'Bit can change how think about software design and the apps you build. Where you used in thinking in applications, you will appreciate component trees and dependency graphs. Bit makes it easier to implement independent components and compose them into systems.',
    component: <ThinkingInComponents />,
  },
];
