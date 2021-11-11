import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

/* Quick Start */
const QuickStart = loadable(() => import('@teambit/docs.content.quick-start'));

export const primaryRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    icon: 'lightning',
    title: 'Quick Start',
    description:
      'Bit is a component build and collaboration framework. It helps teams build components together, and compose them into various features and apps. This allows to build anything in a component-driven architecture, from UI applications, backend services and even CLI tools.    ',
    component: <QuickStart />,
  },
];
