import React from 'react';
import { lazy } from '@loadable/component';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';
// import ImportingComponents from '@teambit/workspace.content.importing-components';

const DevEnvs = lazy(() => import('@teambit/docs.content.getting-started.dev-envs'));
const UseDependencies = lazy(() => import('@teambit/docs.content.getting-started.use-dependencies'));
const CreateWorkspace = lazy(() => import('@teambit/docs.content.getting-started.create-workspace'));
const CreateComponents = lazy(() => import('@teambit/community.content.getting-started.composing.create-components'));

const InstallingBit = lazy(() => import('@teambit/docs.content.getting-started.installing-bit'));

// const NamingComponents = loadable(() => import('@teambit/docs.content.getting-started.version-components'));
// const WhatIsScope = loadable(() => import('@teambit/docs.content.getting-started.what-is-scope'));
// const HostBitCloud = loadable(() => import('@teambit/docs.content.getting-started.host-bit-cloud'));
// const SelfHostScope = loadable(() => import('@teambit/docs.content.getting-started.self-host-scope'));
const AddToExistingProject = lazy(() => import('@teambit/docs.content.installation.add-to-existing-project'));

const InstallComponents = lazy(() => import('@teambit/docs.content.getting-started.install-components'));
const ImportComponents = lazy(() => import('@teambit/docs.content.getting-started.import-components'));

const EditorSetup = lazy(() => import('@teambit/bit.docs.installation.setup-editor'));

const UpdateComponents = lazy(() => import('@teambit/docs.content.getting-started.update-components'));
const CiExport = lazy(() => import('@teambit/docs.content.getting-started.ci-export'));
// const CiInstall = loadable(() => import('@teambit/docs.content.getting-started.ci-install'));
const VersionComponents = lazy(() => import('@teambit/docs.content.getting-started.version-components'));
// const NamingComponents = lazy(() => import('@teambit/docs.content.getting-started.version-components'));
// const WhatIsScope = lazy(() => import('@teambit/docs.content.getting-started.what-is-scope'));
// const HostBitCloud = lazy(() => import('@teambit/docs.content.getting-started.host-bit-cloud'));
// const SelfHostScope = lazy(() => import('@teambit/docs.content.getting-started.self-host-scope'));
const CreateRemoteScope = lazy(() => import('@teambit/docs.content.getting-started.create-remote-scope'));
const ShareComponents = lazy(() => import('@teambit/docs.content.getting-started.share-components'));
// const CiInstall = lazy(() => import('@teambit/docs.content.getting-started.ci-install'));

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
        path: 'installing-bit',
        title: 'Installing Bit',
        description: 'Learn how to install Bit',
        // description:
        //   'A Bit Workspace is where components are built and composed. Workspaces can be generated with the bit new command or initialized on an existing project.',
        component: <InstallingBit />,
      },
      {
        path: 'start-bit-workspace',
        title: 'Start a new Bit workspace',
        description: 'Learn how to create a Bit Workspace',
        component: <CreateWorkspace />,
      },
      {
        path: 'add-to-existing-project',
        title: 'Add to existing project',
        description: 'Learn how to add Bit to an existing project',
        component: <AddToExistingProject />,
      },
      {
        path: 'editor-setup',
        title: 'Editor Setup',
        description: 'Learn how to setup your editor to work properly in your Bit Workspace',
        component: <EditorSetup />,
      },
      {
        path: 'getting-started/setup-ci',
        title: 'Setup CI',
        component: <CiExport />,
        // icon: 'terminal',
        // open: false,
        // children: [
        //   {
        //     path: 'automate-export',
        //     title: 'Automate Component Export',
        //     description: 'To ensure a component is built and published in a consistent manner its recommended to use CI.',
        //     component: <CiExport />,
        //   },
        //   {
        //     path: 'package-consumers',
        //     title: 'Package Consumers',
        //     description: 'Package managers use the .npmrc file to know where they should install dependencies from.',
        //     component: <CiInstall />,
        //   },
        // ],
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
        component: <CreateComponents />,
      },
      // {
      //   path: 'naming-components',
      //   title: 'Naming components',
      // },
      // {
      //   path: 'design-api',
      //   title: 'Design the component API',
      // },
      {
        path: 'dev-environments',
        title: 'Development environments',
        description:
          'Component development is simplified and standardized using Component Development Environments (or envs in short). An env is a compositions of several Services.',
        component: <DevEnvs />,
      },
      {
        path: 'use-dependencies',
        title: 'Use dependencies',
        description: 'Learn how to compose dependencies into your component.',
        component: <UseDependencies />,
      },
    ],
  },
  // {
  //   path: 'getting-started/implementing',
  //   title: 'Building components',
  //   children: [],
  // },
  {
    path: 'getting-started/collaborate',
    title: 'Collaborate',
    icon: 'collaborate',
    open: false,
    children: [
      {
        path: 'snap-component-changes',
        title: 'Snapping components',
        description: 'Learn how to record component changes and collaborate with others',
        component: <VersionComponents />,
      },
      {
        path: 'remote-scope',
        title: 'Create a remote scope',
        description: 'Learn how to create remote scopes',
        component: <CreateRemoteScope />,
      },
      {
        path: 'exporting-components',
        title: 'Exporting components',
        description: 'Learn how to push changes to remote scopes',
        component: <ShareComponents />,
      },

      {
        path: 'importing-components',
        title: 'Importing components',
        component: <ImportComponents />,
      },
    ],
  },
  {
    path: 'getting-started/update',
    title: 'Update',
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
      // {
      //   path: 'import-components',
      //   title: 'Import Components',
      //   description: 'A fundamental feature of a Bit workspace is the ability to vendor components.',
      //   component: <ImportComponents />,
      // },
      {
        path: 'update-components',
        title: 'Update Components',
        component: <UpdateComponents />,
      },
    ],
  },
];
