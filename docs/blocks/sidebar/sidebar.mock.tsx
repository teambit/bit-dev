import React from 'react';
import { DocsRoute, DocsRoutes } from '@teambit/docs.entities.docs-routes';

export const gettingStartedDocsRoutes: DocsRoute[] = [
  {
    path: 'getting-started/installing-bit',
    title: 'Installation',
    icon: 'install',
    open: false,
    children: [
      {
        path: 'installing-bit',
        title: 'Installing Bit',
        component: <div />,
      },
      {
        path: 'start-bit-workspace',
        title: 'Start a new Bit Workspace',
        description:
          'A Bit Workspace is where components are built and composed. Workspaces can be generated with the bit new command or initialized on an existing project.',
        component: <div />,
      },
      {
        path: 'add-to-existing-project',
        title: 'Add to existing project',
        component: <div />,
      },
      {
        path: 'editor-setup',
        title: 'Editor Setup',
        component: <div />,
      },
      {
        path: 'getting-started/setup-ci',
        title: 'Setup CI',
        component: <div />,
      },
    ],
  },
  {
    path: 'getting-started/composing',
    title: 'Compose',
    icon: 'compose',
    open: false,
    children: [
      {
        path: 'spec-breakdown',
        title: 'Creating components',
        description:
          'Bit makes it simple to build each Component independently, and compose it to others with Dependencies.',
        component: <div />,
      },
      {
        path: 'naming-components',
        title: 'Naming components',
      },
      {
        path: 'design-api',
        title: 'Design the component API',
      },
      {
        path: 'dev-environments',
        title: 'Development environments',
        description:
          'Component development is simplified and standardized using Component Development Environments (or envs in short). An env is a compositions of several Services.',
        component: <div />,
      },
      {
        path: 'use-dependencies',
        title: 'Use dependencies',
        description: 'Dependencies allow us to compose components out of other components.',
        component: <div />,
      },
    ],
  },
  {
    path: 'getting-started/collaborate',
    title: 'Collaborate',
    icon: 'collaborate',
    open: false,
    children: [
      {
        path: 'snap-component-changes',
        title: 'Versioning components',
        component: <div />,
      },
      {
        path: 'remote-scope',
        title: 'Create a remote scope',
      },
      {
        path: 'importing-components',
        title: 'Importing components',
        component: <div />,
      },
      {
        path: 'exporting-components',
        title: 'Exporting components',
        component: <div />,
      },
    ],
  },
  {
    path: 'getting-started/use',
    title: 'Use',
    icon: 'use',
    open: false,
    children: [
      {
        path: 'install-components',
        title: 'Install Components',
        description:
          'Components once exported to a remote scope can be consumed in any other project/app with the package manager of your choice.',
        component: <div />,
      },
      {
        path: 'import-components',
        title: 'Import Components',
        description: 'A fundamental feature of a Bit workspace is the ability to vendor components.',
        component: <div />,
      },
      {
        path: 'update-components',
        title: 'Update Components',
        component: <div />,
      },
    ],
  },
];

export const primaryRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    icon: 'lightning',
    title: 'Quick Start',
    description:
      'Bit is a component build and collaboration framework. It helps teams build components together, and compose them into various features and apps. This allows to build anything in a component-driven architecture, from UI applications, backend services and even CLI tools.',
    component: <div />,
  },
  {
    path: 'thinking-in-components',
    icon: 'Lightbulb-thinking',
    title: 'Thinking in Components',
    description:
      'Bit can change how think about software design and the apps you build. Where you used in thinking in applications, you will appreciate component trees and dependency graphs. Bit makes it easier to implement independent components and compose them into systems.',
    component: <div />,
    
  },
];
