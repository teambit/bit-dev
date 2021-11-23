import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

const DevEnvs = React.lazy(() => import('@teambit/docs.content.getting-started.dev-envs'));
const UseDependencies = React.lazy(() => import('@teambit/docs.content.getting-started.use-dependencies'));
const CreateWorkspace = React.lazy(() => import('@teambit/docs.content.getting-started.create-workspace'));
const CreateComponents = React.lazy(
  () => import('@teambit/community.content.getting-started.composing.create-components')
);

const VersionComponents = React.lazy(() => import('@teambit/docs.content.getting-started.version-components'));
// const WhatIsScope = React.lazy(() => import('@teambit/docs.content.getting-started.what-is-scope'));
const HostBitCloud = React.lazy(() => import('@teambit/docs.content.getting-started.host-bit-cloud'));
const SelfHostScope = React.lazy(() => import('@teambit/docs.content.getting-started.self-host-scope'));
const ShareComponents = React.lazy(() => import('@teambit/docs.content.getting-started.share-components'));
const InstallComponents = React.lazy(() => import('@teambit/docs.content.getting-started.install-components'));
const ImportComponents = React.lazy(() => import('@teambit/docs.content.getting-started.import-components'));
const UpdateComponents = React.lazy(() => import('@teambit/docs.content.getting-started.update-components'));
const CiExport = React.lazy(() => import('@teambit/docs.content.getting-started.ci-export'));
const CiInstall = React.lazy(() => import('@teambit/docs.content.getting-started.ci-install'));

export const gettingStartedDocsRoutes: DocsRoute[] = [
  {
    path: 'getting-started/installing-bit',
    title: 'Installation',
    // description: 'Installing Bit',
    icon: 'install',
    open: false,
    // component: <InstallingBit />,
    children: [
      {
        path: 'start-bit-workspace',
        title: 'Start a new Bit Workspace',
        description:
          'A Bit Workspace is where components are built and composed. Workspaces can be generated with the bit new command or initialized on an existing project.',
        component: <CreateWorkspace />,
      },
      {
        path: 'add-to-existing-project',
        title: 'Add to existing project',
      },
      {
        path: 'editor-setup',
        title: 'Editor Setup',
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
        path: 'first-components',
        title: 'Your First Components',
        description:
          'Bit makes it simple to build each Component independently, and compose it to others with Dependencies.',
        component: <CreateComponents />,
      },
      {
        path: 'dev-environments',
        title: 'Development Environments',
        description:
          'Component development is simplified and standardized using Component Development Environments (or envs in short). An env is a compositions of several Services.',
        component: <DevEnvs />,
      },
      {
        path: 'use-dependencies',
        title: 'Use Dependencies',
        description: 'Dependencies allow us to compose components out of other components.',
        component: <UseDependencies />,
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
        title: 'Snapshot Component Changes',
        component: <VersionComponents />,
      },
      {
        path: 'version-components',
        title: 'Version Components',
        description:
          "By setting a version for a component you build a history of changes to a component's implementation. This version history can be shared through a remote Bit server.",
        component: <VersionComponents />,
      },
      {
        path: 'remote-scope',
        title: 'Create a Remote Scope',
        open: false,
        children: [
          {
            path: 'host-on-bit-cloud',
            title: 'Host on Bit Cloud',
            description: 'Bit is connected to bit.cloud as its default hosting provider.',
            component: <HostBitCloud />,
          },
          {
            path: 'self-host-scope',
            title: 'Self-hosted Scope',
            description:
              'When self-hosting Bit on your own infrastructure you will also need to publish components to an external registry so components will be available to install with package managers.',
            component: <SelfHostScope />,
          },
        ],
      },
      {
        path: 'importing-components',
        title: 'Importing Components',
        component: <ShareComponents />,
      },
      {
        path: 'exporting-components',
        title: 'Exporting components',
        component: <ShareComponents />,
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
        component: <InstallComponents />,
      },
      {
        path: 'import-components',
        title: 'Import Components',
        description: 'A fundamental feature of a Bit workspace is the ability to vendor components.',
        component: <ImportComponents />,
      },
      {
        path: 'update-components',
        title: 'Update Components',
        component: <UpdateComponents />,
      },
    ],
  },
  {
    path: 'getting-started/setup-ci',
    title: 'Setup CI',
    icon: 'terminal',
    open: false,
    children: [
      {
        path: 'automate-export',
        title: 'Automate Component Export',
        description: 'To ensure a component is built and published in a consistent manner its recommended to use CI.',
        component: <CiExport />,
      },
      {
        path: 'package-consumers',
        title: 'Package Consumers',
        description: 'Package managers use the .npmrc file to know where they should install dependencies from.',
        component: <CiInstall />,
      },
    ],
  },
];
