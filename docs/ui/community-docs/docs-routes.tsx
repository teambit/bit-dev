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
    component: <QuickStart />
  },
  {
    path: 'getting-started',
    title: 'Getting Started',
    icon: 'workspace',
    children: [
      {
        path: 'installing-bit',
        title: 'Installing Bit',
        component: <InstallingBit />
      },
      {
        path: 'create-new-workspace',
        title: 'Create a new Workspace',
        component: <CreateWorkspace />
      },
      {
        path: 'composing',
        title: 'Composing',
        collapsed: false,
        children: [
          {
            path: 'creating-components',
            title: 'Creating Components',
            component: <CreateComponents />
          },
          {
            path: 'dev-environments',
            title: 'Dev environments',
            component: <DevEnvs />        
          },
          {
            path: 'use-dependencies',
            title: 'Use dependencies',
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
    children: [
      {
        path: 'bitmap',
        title: 'bitmap',
        component: <Bitmap />
      }
    ]
  },
  {
    path: 'scope',
    title: 'Scope',
    icon: 'collection',
    children: [
      {
        path: 'overview',
        title: 'Overview',
        component: <ScopeOverview />
      }
    ]
  }
];
