import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.ui.docs';

const QuickStart = loadable(() => import('@teambit/docs.content.quick-start'));
const InstallingBit = loadable(() => import('@teambit/docs.content.getting-started.installing-bit'));
const CreateComponents = loadable(() => import('@teambit/community.content.getting-started.composing.create-components'));
const DevEnvs = loadable(() => import('@teambit/docs.content.getting-started.dev-envs'));
const UseDependencies = loadable(() => import('@teambit/docs.content.getting-started.use-dependencies'));
const CreateWorkspace = loadable(() => import('@teambit/docs.content.getting-started.create-workspace'));
const Bitmap = loadable(() => import('@teambit/workspace.content.bitmap'));
const ScopeOverview = loadable(() => import('@teambit/scope.content.scope-overview'));

export const docsRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    title: 'Quick Start',
    description: 'Quick Start',
    component: <QuickStart />
  },
  {
    path: 'getting-started',
    title: 'Getting Started',
    open: false,
    icon: 'workspace',
    children: [
      {
        path: 'installing-bit',
        title: 'Installing Bit',
        description: 'Installing Bit',
        component: <InstallingBit />
      },
      {
        path: 'create-new-workspace',
        title: 'Create a new Workspace',
        description: 'Create a new Workspace',
        component: <CreateWorkspace />
      },
      {
        path: 'composing',
        title: 'Composing',
        open: false,
        children: [
          {
            path: 'creating-components',
            title: 'Creating Components',
            description: 'Creating Components',
            component: <CreateComponents />
          },
          {
            path: 'dev-environments',
            title: 'Dev environments',
            description: 'Dev environments',
            component: <DevEnvs />        
          },
          {
            path: 'use-dependencies',
            title: 'Use dependencies',
            description: 'Use dependencies',
            component: <UseDependencies />
          }        
        ]
      }
    ]
  },
  {
    path: 'workspace',
    title: 'Workspace',
    icon: 'workspace',
    open: false,
    children: [
      {
        path: 'bitmap',
        title: 'bitmap',
        description: 'bitmap',
        component: <Bitmap />
      }
    ]
  },
  {
    path: 'scope',
    title: 'Scope',
    icon: 'collection',
    open: false,
    children: [
      {
        path: 'overview',
        title: 'Overview',
        description: 'Overview',
        component: <ScopeOverview />
      }
    ]
  }
];
