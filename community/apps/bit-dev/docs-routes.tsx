import React from 'react';
import { QuickStart } from '@teambit/docs.content.quick-start';
import { DocsRoute } from '@teambit/docs.ui.docs';

export const docsRoutes: DocsRoute[] = [
  {
    sidebarPath: 'Quick Start',
    path: 'quick-start',
    title: 'Quick Start',
    component: <QuickStart />
  },
  {
    sidebarPath: 'Getting Started/Installing Bit',
    path: 'getting-started/installing-bit',
    title: 'Installing Bit',
    component: <QuickStart />
  },
  {
    sidebarPath: 'Getting Started/Composing Components',
    path: 'getting-started/composing-components',
    title: 'Getting Started / Composing Components',
    component: <QuickStart />
  }
];
