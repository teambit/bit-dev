import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.ui.docs';

const QuickStart = loadable(() => import('@teambit/docs.content.quick-start'));
const InstallingBit = loadable(() => import('@teambit/docs.content.getting-started.installing-bit'));
const CreateComponents = loadable(() => import('@teambit/community.content.getting-started.composing.create-components'));
const DevEnvs = loadable(() => import('@teambit/docs.content.getting-started.dev-envs'));
const UseDependencies = loadable(() => import('@teambit/docs.content.getting-started.use-dependencies'));
const CreateWorkspace = loadable(() => import('@teambit/docs.content.getting-started.create-workspace'));

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
    component: <InstallingBit />
  },
  {
    sidebarPath: 'Getting Started/Create a new Workspace',
    path: 'getting-started/create-a-new-workspace',
    title: 'Create a new Workspace',
    component: <CreateWorkspace />
  },
  {
    sidebarPath: 'Getting Started/Composing/Creating components',
    path: 'getting-started/composing/creating-components',
    title: 'Getting Started / Composing / Creating Components',
    component: <CreateComponents />
  },
  {
    sidebarPath: 'Getting Started/Composing/Dev environments',
    path: 'getting-started/composing/dev-environments',
    title: 'Getting Started / Dev environments',
    component: <DevEnvs />
  },
  {
    sidebarPath: 'Getting Started/Composing/Use dependencies',
    path: 'getting-started/composing/use-dependencies',
    title: 'Getting Started / Composing / Use dependencies',
    component: <UseDependencies />
  },
  {
    sidebarPath: 'Getting Started/Collaborate/Version components',
    path: 'getting-started/creating-components',
    title: 'Getting Started / Creating Components',
    component: <CreateComponents />
  },
  {
    sidebarPath: 'Getting Started/Collaborate/Share components',
    path: 'getting-started/creating-components',
    title: 'Getting Started / Creating Components',
    component: <CreateComponents />
  },
  {
    sidebarPath: 'Getting Started/Collaborate/Create a remote scope',
    path: 'getting-started/creating-components',
    title: 'Getting Started / Creating Components',
    component: <CreateComponents />
  },
  {
    sidebarPath: 'Getting Started/Use/Install components',
    path: 'getting-started/creating-components',
    title: 'Getting Started / Creating Components',
    component: <CreateComponents />
  },
  {
    sidebarPath: 'Getting Started/Use/Import components',
    path: 'getting-started/creating-components',
    title: 'Getting Started / Creating Components',
    component: <CreateComponents />
  },
  {
    sidebarPath: 'Getting Started/Use/Update components',
    path: 'getting-started/creating-components',
    title: 'Getting Started / Creating Components',
    component: <CreateComponents />
  },
  {
    sidebarPath: 'Workspace/Workspace Introduction',
    path: 'workspace/workspace-introduction',
    title: 'Workspace / Introduction',
    component: <QuickStart />
  }
];
