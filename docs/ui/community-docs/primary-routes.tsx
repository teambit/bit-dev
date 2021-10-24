import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.ui.docs';

/* Quick Start */
const QuickStart = loadable(() => import('@teambit/docs.content.quick-start'));

export const primaryRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    icon: 'lightning',
    title: 'Quick Start',
    description: 'Quick Start',
    component: <QuickStart />,
  },
]
