import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

/* Getting Started */

// const InstallingBit = loadable(() => import('@teambit/docs.content.getting-started.installing-bit'));
const CreateComponents = loadable(
  () => import('@teambit/community.content.getting-started.composing.create-components')
);
const DevEnvs = loadable(() => import('@teambit/docs.content.getting-started.dev-envs'));
const UseDependencies = loadable(() => import('@teambit/docs.content.getting-started.use-dependencies'));
const CreateWorkspace = loadable(() => import('@teambit/docs.content.getting-started.create-workspace'));

const VersionComponents = loadable(() => import('@teambit/docs.content.getting-started.version-components'));
// const WhatIsScope = loadable(() => import('@teambit/docs.content.getting-started.what-is-scope'));
const HostBitCloud = loadable(() => import('@teambit/docs.content.getting-started.host-bit-cloud'));
const SelfHostScope = loadable(() => import('@teambit/docs.content.getting-started.self-host-scope'));
const ShareComponents = loadable(() => import('@teambit/docs.content.getting-started.share-components'));
const InstallComponents = loadable(() => import('@teambit/docs.content.getting-started.install-components'));
const ImportComponents = loadable(() => import('@teambit/docs.content.getting-started.import-components'));
const UpdateComponents = loadable(() => import('@teambit/docs.content.getting-started.update-components'));
const CiExport = loadable(() => import('@teambit/docs.content.getting-started.ci-export'));
const CiInstall = loadable(() => import('@teambit/docs.content.getting-started.ci-install'));

/* Harmony */
// const CliReference = loadable(() => import('@teambit/harmony.content.cli-reference'));
const AspectsOverview = loadable(() => import('@teambit/harmony.content.aspects-overview'));
const UsingAspects = loadable(() => import('@teambit/harmony.content.using-aspects'));

/* Workspace */
const WorkspaceOverview = loadable(() => import('@teambit/workspace.content.workspace-overview'));
const Bitmap = loadable(() => import('@teambit/workspace.content.bitmap'));
const WorkspaceLink = loadable(() => import('@teambit/workspace.content.workspace-link'));
const DirectoryStructure = loadable(() => import('@teambit/workspace.content.directory-structure'));
const ComponentDir = loadable(() => import('@teambit/workspace.content.component-directory'));
const WorkspaceStatus = loadable(() => import('@teambit/workspace.content.workspace-status'));
const ClearingCache = loadable(() => import('@teambit/workspace.content.clearing-cache'));
const WorkspaceConfiguration = loadable(() => import('@teambit/workspace.content.workspace-configuration'));
const ImportingComponents = loadable(() => import('@teambit/workspace.content.importing-components'));
const ExportingComponents = loadable(() => import('@teambit/workspace.content.exporting-components'));
const CreatingWorkspaces = loadable(() => import('@teambit/workspace.content.creating-workspaces'));
const ConfiguringRemoteScopes = loadable(() => import('@teambit/workspace.content.configuring-remote-scopes'));
const LocalScope = loadable(() => import('@teambit/workspace.content.local-scope'));
const MovingComponents = loadable(() => import('@teambit/workspace.content.moving-components'));
const Variants = loadable(() => import('@teambit/workspace.content.variants'));

/* Scope */
const ScopeOverview = loadable(() => import('@teambit/scope.content.scope-overview'));
const CreatingScopes = loadable(() => import('@teambit/scope.content.creating-scopes'));
const ScopeJson = loadable(() => import('@teambit/scope.content.scope-json'));
const IndexJson = loadable(() => import('@teambit/scope.content.index-json'));
const HostingScopes = loadable(() => import('@teambit/scope.content.hosting-scopes'));

/* Dev services */

const DevServicesOverview = loadable(() => import('@teambit/envs.content.dev-services-overview'));

/* Preview */

const PreviewOverview = loadable(() => import('@teambit/preview.content.preview-overview'));
const PreviewDuringBuild = loadable(() => import('@teambit/preview.content.preview-during-build'));
const PreviewDuringDevelopment = loadable(() => import('@teambit/preview.content.preview-during-development'));

const RegisterCustomPreview = loadable(() => import('@teambit/preview.content.register-custom-preview'));

/* Tester */
const TesterOverview = loadable(() => import('@teambit/defender.content.tester-overview'));
const TestingDuringDevelopment = loadable(() => import('@teambit/defender.content.testing-during-development'));
const TestingDuringBuild = loadable(() => import('@teambit/defender.content.testing-during-build'));
const ConfigureEnvWithTester = loadable(() => import('@teambit/defender.content.configure-env-with-tester'));
const ImplementTester = loadable(() => import('@teambit/defender.content.implement-tester'));

/* Linter */

const LinterOverview = loadable(() => import('@teambit/defender.content.linter-overview'));
const LintingDuringDevelopment = loadable(() => import('@teambit/defender.content.linting-during-development'));
const LintingDuringBuild = loadable(() => import('@teambit/defender.content.linting-during-build'));
const ConfigureEnvWithLinter = loadable(() => import('@teambit/defender.content.configure-env-with-linter'));
const ImplementLinter = loadable(() => import('@teambit/defender.content.implement-linter'));

/* Formatter */

const FormatterOverview = loadable(() => import('@teambit/defender.content.formatter-overview'));
const FormattingDuringDevelopment = loadable(() => import('@teambit/defender.content.formatting-during-development'));
const FormattingDuringBuild = loadable(() => import('@teambit/defender.content.formatting-during-build'));
const ConfigureEnvWithFormatter = loadable(() => import('@teambit/defender.content.configure-env-with-formatter'));
const ImplementFormatter = loadable(() => import('@teambit/defender.content.implement-formatter'));

/* Compiler  */

const CompilerOverview = loadable(() => import('@teambit/compilation.content.compiler-overview'));
const CompilingDuringDevelopment = loadable(() => import('@teambit/compilation.content.compiling-during-development'));
const CompilingDuringBuild = loadable(() => import('@teambit/compilation.content.compiling-during-build'));
const ConfigureEnvWithCompiler = loadable(() => import('@teambit/compilation.content.configure-env-with-compiler'));
const ImplementCompiler = loadable(() => import('@teambit/compilation.content.implement-compiler'));
const CompilerAPI = loadable(() => import('@teambit/compilation.content.compiler-api'));
const MultiCompiler = loadable(() => import('@teambit/compilation.content.multi-compiler'));
const ConfigureWebpck = loadable(() => import('@teambit/webpack.content.configure-webpack'));

/* Builder */

const BuilderOverview = loadable(() => import('@teambit/pipelines.content.builder-overview'));
const BuildPipelines = loadable(() => import('@teambit/pipelines.content.build-pipelines'));
const BuildTasks = loadable(() => import('@teambit/pipelines.content.build-tasks'));
const BuildArtifacts = loadable(() => import('@teambit/pipelines.content.build-artifacts'));
const Capsule = loadable(() => import('@teambit/component.content.capsule'));

/* Docs */

const DocsOverview = loadable(() => import('@teambit/docs.content.docs-overview'));
const MDX = loadable(() => import('@teambit/docs.content.mdx'));
const DocTemplates = loadable(() => import('@teambit/docs.content.doc-templates'));
const RenderingDocs = loadable(() => import('@teambit/docs.content.rendering-docs'));

/* Compositions */

const CompositionsOverview = loadable(() => import('@teambit/compositions.content.compositions-overview'));
const CompositionFormat = loadable(() => import('@teambit/compositions.content.composition-format'));
const CompositionContext = loadable(() => import('@teambit/compositions.content.composition-context'));
const MountingCompositionsToDom = loadable(() => import('@teambit/compositions.content.mounting-compositions-to-dom'));
const CompositionsAndStories = loadable(() => import('@teambit/compositions.content.compositions-and-stories'));

/* Components */

const ComponentId = loadable(() => import('@teambit/component.content.component-id'));
const ComponentOverview = loadable(() => import('@teambit/component.content.component-overview'));
const RemovingDeprecating = loadable(() => import('@teambit/docs.content.guides.removing-deprecating-components'));
const MergingComponentVersions = loadable(() => import('@teambit/docs.content.guides.merging-component-versions'));
const MainFile = loadable(() => import('@teambit/component.content.component-main-file'));
const ComponentConfig = loadable(() => import('@teambit/component.content.component-config'));
// const ComponentJson = loadable(() => import('@teambit/component.content.component-json'));
const ComponentObjects = loadable(() => import('@teambit/component.content.component-objects'));
const DevFiles = loadable(() => import('@teambit/component.content.dev-files'));
const InspectingComponents = loadable(() => import('@teambit/component.content.inspecting-components'));
const Tags = loadable(() => import('@teambit/component.content.tags'));
const Snaps = loadable(() => import('@teambit/component.content.snaps'));
const ComponentAnatomy = loadable(() => import('@teambit/component.content.component-anatomy'));

/* Envs */

const InspectingEnv = loadable(() => import('@teambit/envs.content.inspecting-env'));
const ExtendingEnv = loadable(() => import('@teambit/envs.content.extending-env'));
const EnvToubleshooting = loadable(() => import('@teambit/envs.content.env-troubleshooting'));

/* Dependencies */

const DependenciesOverview = loadable(() => import('@teambit/dependencies.content.dependencies-overview'));
const ExternalDependencies = loadable(() => import('@teambit/dependencies.content.external-dependencies'));
const DependencyPolicies = loadable(() => import('@teambit/dependencies.content.dependency-policies'));
const ConfiguringDependencies = loadable(() => import('@teambit/dependencies.content.configuring-dependencies'));
const DependenciesConfiguration = loadable(() => import('@teambit/dependencies.content.dependencies-configuration'));
const DependencyInstallation = loadable(() => import('@teambit/dependencies.content.installing-dependencies'));
// const DependencyResolution = loadable(() => import('@teambit/dependencies.content.dependency-resolution'));
const LockFiles = loadable(() => import('@teambit/dependencies.content.lock-files'));
const Pnpm = loadable(() => import('@teambit/dependencies.content.pnpm'));
const Yarn = loadable(() => import('@teambit/dependencies.content.yarn'));
const NodeModules = loadable(() => import('@teambit/dependencies.content.node-modules'));
const PackageManagers = loadable(() => import('@teambit/dependencies.content.package-managers'));

/* Packages */

const PackagesOverview = loadable(() => import('@teambit/pkg.content.packages-overview'));
const PackageJson = loadable(() => import('@teambit/pkg.content.package-json'));
const ManagingPackageJson = loadable(() => import('@teambit/pkg.content.managing-package-json'));
const PackageName = loadable(() => import('@teambit/pkg.content.package-name'));
const PackingComponents = loadable(() => import('@teambit/pkg.content.packing-components'));
const CommonjsPackageRegistries = loadable(() => import('@teambit/pkg.content.commonjs-package-registries'));
const PkgBuildTasks = loadable(() => import('@teambit/pkg.content.pkg-build-tasks'));
const Npmrc = loadable(() => import('@teambit/pkg.content.npmrc'));

/* Reference */

const UsingBVM = loadable(() => import('@teambit/docs.content.guides.using-bvm'));

/* Global Config */
const BitConfig = loadable(() => import('@teambit/docs.content.guides.bit-config'));
const ConfigFiles = loadable(() => import('@teambit/docs.content.guides.config-files'));

export const docsRoutes: DocsRoute[] = [
  {
    path: 'getting-started',
    title: 'Getting Started',
    icon: 'Ripple_play',
    children: [
      {
        path: 'installing-bit',
        title: 'Installation',
        // description: 'Installing Bit',
        icon: 'install',
        // component: <InstallingBit />,
        children: [
          {
            path: 'start-bit-project',
            title: 'Start a new Bit Workspace',
            description:
              'A Bit Workspace is where components are built and composed. Workspaces can be generated with the bit new command or initialized on an existing project.',
            component: <CreateWorkspace />,
          },
          {
            path: 'editor-setup',
            title: 'Editor Setup',
          },
          {
            path: 'add-to-existing-project',
            title: 'Add on Existing Project',
          },
        ],
      },
      {
        path: 'composing',
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
        path: 'collaborate',
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
        path: 'use',
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
        path: 'setup-ci',
        title: 'Setup CI',
        icon: 'terminal',
        open: false,
        children: [
          {
            path: 'automate-export',
            title: 'Automate Component Export',
            description:
              'To ensure a component is built and published in a consistent manner its recommended to use CI.',
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
    ],
  },
  {
    path: 'workspace',
    title: 'Workspace',
    icon: 'workspace',
    open: false,
    component: <WorkspaceOverview />,
    config: {
      path: 'workspace-configuration',
      component: <WorkspaceConfiguration />,
      title: 'Workspace configuration',
    },
    children: [
      {
        path: 'creating-workspaces',
        title: 'Creating Workspaces',
        component: <CreatingWorkspaces />,
      },
      {
        path: 'creating-components',
        title: 'Creating Components',
        description:
          'Bit makes it simple to build each Component independently, and compose it to others with Dependencies. Components can be created in different types such as Node Modules, React Components, Angular Modules and more.',
        component: <CreateComponents />,
      },
      {
        path: 'workspace-configuration',
        component: <WorkspaceConfiguration />,
        title: 'Workspace Configuration',
      },
      {
        path: 'directory-structure',
        title: 'Directory Structure',
        description:
          'The Bit Workspace is flexible in directory structure to preserve a seamless dev experience for building distributed apps.',
        component: <DirectoryStructure />,
      },
      {
        path: 'component-directory',
        title: 'Component Directory',
        description:
          'A Component Directory is a directory in the developer Workspace. Directories are mapped as Components using the .bitmap rootDir property which exist for every Component entry.',
        component: <ComponentDir />,
      },
      {
        path: 'workspace-status',
        title: 'Workspace Status',
        description:
          "Bit' workspace track changes done to components, and shows the state of each in your project's workspace.",
        component: <WorkspaceStatus />,
      },
      {
        path: 'moving-components',
        title: 'Moving Components',
        description: 'To move a component you can use the bit move command.',
        component: <MovingComponents />,
      },
      {
        path: 'importing-components',
        title: 'Importing Components',
        description:
          'Importing is the process of copying Components from their Scope to the Local Scope, to use and maintain them in the Workspace.',
        component: <ImportingComponents />,
      },
      {
        path: 'exporting-components',
        title: 'Exporting Components',
        description:
          'Exporting is the process of copying Component versions from the Local Scope to remote Scopes, to make them available to other projects.',
        component: <ExportingComponents />,
      },
      {
        path: 'variants',
        title: 'Configuration Variants',
        description: 'Variants enables you to configure group of components with Component configuration.',
        component: <Variants />,
      },
      {
        path: 'removing-components',
        title: 'Removing Components',
        description:
          'Refactoring code often causes components to become obsolete or irrelevant. This is where removing and deprecating components becomes useful and necessary.',
        component: <RemovingDeprecating />,
      },
      {
        path: 'bitmap',
        title: 'bitmap',
        description:
          ".bitmap is a file auto-generated and managed by Bit in the Workspace for mapping component to their corresponding directory in the project's file system.",
        component: <Bitmap />,
      },
      {
        path: 'component-links',
        title: 'Workspace Component Link',
        component: <WorkspaceLink />,
      },
      {
        path: 'configuring-remote-scopes',
        title: 'Configuring Remote Scopes',
        component: <ConfiguringRemoteScopes />,
      },
      {
        path: 'local-scope',
        title: 'Local Scope',
        description:
          'The Local Scope is located in the .bit or .git/bit directory at the root of the Workspace. It is where component versions (snapshots) are stored.',
        component: <LocalScope />,
      },
      {
        path: 'clearing-cache',
        title: 'Clearing Cache',
        component: <ClearingCache />,
      },
    ],
  },
  {
    path: 'components',
    title: 'Components',
    icon: 'comps',
    open: false,
    children: [
      {
        path: 'component-overview',
        title: 'Component Overview',
        description:
          'Component is a decoupled, versioned source-code container designed for the purpose of containing a single module or component.',
        component: <ComponentOverview />,
      },
      {
        path: 'creating-components',
        title: 'Creating components',
        component: <ComponentAnatomy />,
      },
      {
        path: 'component-config',
        title: 'Component Configuration',
        component: <ComponentConfig />,
      },
      {
        path: 'tags',
        title: 'Tags',
        description:
          'Tags are immutable component snapshots that are marked with release versions (1.0.0, 1.0.1). They are used for consumption, as well as for collaboration.',
        component: <Tags />,
      },
      {
        path: 'snaps',
        title: 'Snaps',
        description:
          'Snaps allow the recoding of component changes without creating or publishing a new sematic version for them.',
        component: <Snaps />,
      },
      {
        path: 'lanes',
        title: 'Lanes',
        component: <Snaps />,
      },
      {
        path: 'navigating-history',
        title: 'Navigating history',
        component: <Snaps />,
      },
      {
        title: 'Merge conflicts',
        path: 'merge-conflicts',
        component: <MergingComponentVersions />,
      },
      {
        path: 'component-id',
        title: 'Component ID',
        description:
          'The Component ID is designed to be a unique, human-readable name that simplifies and help organize components while empowering team autonomy by avoiding cross-team naming conflicts.',
        component: <ComponentId />,
      },
      {
        path: 'component-main-file',
        title: 'Main File',
        description:
          'The main file of a Component is the file resolved upon a require of the Component Directory. Main file is usually expected to expose the Component API.',
        component: <MainFile />,
      },
      // {
      //   path: 'component-json',
      //   title: 'component.json',
      //   component: <ComponentJson />,
      // },
      {
        path: 'dev-files',
        title: 'Dev Files',
        description:
          'Dev files are component files used for development and not for production. Dev files are determined as such by the Dev Files Aspect.',
        component: <DevFiles />,
      },
      {
        path: 'inspecting-components',
        title: 'Inspecting Components',
        component: <InspectingComponents />,
      },
      {
        path: 'component-capsules',
        title: 'Component Capsules',
        description:
          'A capsule is an isolated component environment. It is mainly implemented as a directory that hosts a component outside its workspace directory.',
        component: <Capsule />,
      },
      {
        path: 'component-objects',
        title: 'Component Objects',
        description:
          'When tagging or snapping a component, bit persists the versioned data (the component source files, config, metadata, and artifacts) in git-like objects',
        component: <ComponentObjects />,
      },
    ],
  },
  {
    path: 'dependencies',
    title: 'Dependencies',
    open: false,
    icon: 'dependencies-icn',
    config: {
      path: 'dependencies-config',
      title: 'Dependencies Config',
      component: <DependenciesConfiguration />,
    },
    children: [
      {
        path: 'dependencies-overview',
        title: 'Dependencies Overview',
        description:
          'Dependency management is a major concern for developers looking to build and deliver components independently.',
        component: <DependenciesOverview />,
      },
      {
        path: 'dependency-installation',
        title: 'Dependency Installation',
        description:
          "Bit's dependency resolver ensures Workspace Components and External Dependencies are resolved and kept up to date.",
        component: <DependencyInstallation />,
      },
      {
        path: 'dependency-policies',
        title: 'Dependency Policies',
        description:
          'Component dependnecies are defined in Bit through dependency policies. A dependency policy is definition of a set of dependencies, with a SemVer range, allowed to use from components in your development workspace.',
        component: <DependencyPolicies />,
      },
      {
        path: 'configuring-dependencies',
        title: 'Configuring Dependencies',
        description:
          'Even though dependencies are usally set automatically by using dependency policies. Components in the Workspace can be configured with a specific set of dependencies.',
        component: <ConfiguringDependencies />,
      },
      {
        path: 'updates',
        title: 'Dependency Updates',
      },
      {
        path: 'package-managers',
        title: 'Package Managers',
        description:
          "Bit's Package Manager Aspect encapsulates Yarn, pnpm, NPM or any other supported CommonJS package manager using the bit install command.",
        component: <PackageManagers />,
      },
      {
        path: 'external-dependencies',
        title: 'External Dependencies',
        description:
          "External dependencies are Components or packages, defined in your Workspace's Dependency Policy, and installed and resolved from the node_modules directory.",
        component: <ExternalDependencies />,
      },
      {
        path: 'node-modules',
        title: 'node_modules',
        description:
          'The node_modules directory is a standard directory in which modules are resolved from initially by the NodeJS Module Resolution and as a result by other tools across the JS ecosystem such as Webpack, Rollup, TypeScript and others.',
        component: <NodeModules />,
      },
      // {
      //   path: 'dependency-resolution',
      //   title: 'Dependency resolution',
      //   component: <DependencyResolution />,
      // },
      {
        path: 'cyclic-dependencies',
        title: 'Cyclic Dependencies',
      },
      {
        path: 'lock-files',
        title: 'Lock Files',
        description:
          'A lock file is a representation of the node_modules directory, written in a YAML format. It is automatically generated and updated, whenever the node_modules directory structure is modified by the package manager (when packages are either installed or removed).',
        component: <LockFiles />,
      },
      {
        path: 'inspecting-dependencies',
        title: 'Inspecting Dependencies',
      },
    ],
  },
  {
    path: 'scope',
    open: false,
    title: 'Scope',
    icon: 'collection',
    config: {
      path: 'scope-config',
      title: 'Scope configuration',
      component: <div />,
    },
    children: [
      {
        path: 'scope-overview',
        title: 'Scope Overview',
        description:
          'Scope is a distributed component collaboration host. You can think of it as a micro service, which helps set team and ownership boundaries and allows others to use components as APIs and collaborate on them.',
        component: <ScopeOverview />,
      },
      {
        path: 'creating-scopes',
        title: 'Creating Scopes',
        description:
          'Components can be collaborated on using Scopes hosted on Bit Cloud. This can be done quite easily as Bit offers built-in support for Bit Cloud.',
        component: <CreatingScopes />,
      },
      {
        path: 'configuring-scopes',
        title: 'Configuring Scopes (scope.json)',
        component: <ScopeJson />,
      },
      {
        path: 'running-a-scope-server',
        title: 'Hosting Scopes',
        component: <HostingScopes />,
      },
      {
        path: 'inspecting-objects',
        title: 'Inspecting Scope Objects',
        description:
          'Component objects are stored in Scopes (Local Scopes and Remote Scopes), using the content-addressable storage method. They are either copied to or from remote scopes, when exported or imported (respectively).',
        component: <ComponentObjects />,
      },
      {
        path: 'index-json',
        title: 'index.json',
        description:
          "The index.json file maps components (scope ID and component full name) to their objects' hash. This mapping is used, among other things, by the workspace, to reference a Version Object using a component ID and Tag or Snap version.",
        component: <IndexJson />,
      },
      {
        path: 'extending-scopes',
        title: 'Extending Scopes',
        component: <ScopeOverview />,
      },
    ],
  },
  {
    path: 'envs',
    title: 'Envs',
    icon: 'Internal',
    open: false,
    config: {
      path: 'envs-config',
      title: 'Envs configuration',
      component: <div />,
    },
    children: [
      {
        path: 'envs-overview',
        title: 'Envs Overview',
      },
      {
        path: 'inspecting-env',
        title: 'Inspecting an Env',
        description:
          "Understanding your Env's config can be crucial for predicable and bug-free outcomes. Getting the right the information, however, can be quite tricky as there could be multiple sources for a single config.",
        component: <InspectingEnv />,
      },
      {
        path: 'extending-env',
        title: 'Extending an Env',
        description:
          'Envs can be customized and extended by creating a Env Extension. An Env Extension is an Aspect component that depends on another Env and uses it to compose a new customized Env.',
        component: <ExtendingEnv />,
      },
      {
        path: 'env-troubleshooting',
        title: 'Env Troubleshooting',
        component: <EnvToubleshooting />,
      },
    ],
  },
  {
    path: 'dev-services',
    title: 'Dev Services',
    icon: 'compCI',
    open: false,
    children: [
      {
        path: 'dev-services-overview',
        title: 'Dev Services Overview',
        description:
          "Dev Services simplify and standardize component development processes, like testing, linting and documenting. They are applied on components, and used by components, via the components' Envs.",
        component: <DevServicesOverview />,
      },
      {
        path: 'builder',
        title: 'Builder',
        icon: 'builder',
        open: false,
        children: [
          {
            path: 'builder-overview',
            title: 'Overview',
            description: `The Builder Aspect manages the component build pipelines. It executes build tasks in sequence, according to their dependency on other tasks, as well as the tasks' own "requests".`,
            component: <BuilderOverview />,
          },
          {
            path: 'build-pipelines',
            title: 'Build Pipelines',
            description:
              'The Builder runs three separate build pipelines, the basic build pipeline, the snap pipeline and the tag pipeline.',
            component: <BuildPipelines />,
          },
          {
            path: 'build-tasks',
            title: 'Build Tasks',
            description:
              'Build tasks are component development operations that are executed in sequence, in one or more build pipelines.',
            component: <BuildTasks />,
          },
          {
            path: 'build-artifacts',
            title: 'Build Artifacts',
            description:
              'Artifacts are files that are generated by a build task, and persisted in the component objects (the component version).',
            component: <BuildArtifacts />,
          },
          {
            path: 'capsule',
            title: 'Caspule',
            description:
              'A capsule is an isolated component environment. It is mainly implemented as a directory that hosts a component outside its workspace directory.',
            component: <Capsule />,
          },
        ],
      },
      {
        path: 'generator',
        title: 'Generator',
        icon: 'generator',
        open: false,
        children: [
          {
            path: 'generator-overview',
            title: 'Generator Overview',
          },
        ],
      },
      {
        path: 'compiler',
        title: 'Compiler',
        icon: 'compile',
        open: false,
        children: [
          {
            path: 'compiler-overview',
            title: 'Compiler Overview',
            description: 'The Compiler aspect simplifies and standardizes the process of the compiling components.',
            component: <CompilerOverview />,
          },
          {
            path: 'compiling-during-development',
            title: 'Compiling during Development',
            component: <CompilingDuringDevelopment />,
          },
          {
            path: 'compiling-during-build',
            title: 'Compiling during Build',
            component: <CompilingDuringBuild />,
          },
          {
            path: 'configure-env-with-compiler',
            title: 'Configure an Env with a Compiler',
            component: <ConfigureEnvWithCompiler />,
          },
          {
            path: 'implement-compiler',
            title: 'Implement a Compiler',
            description:
              'Standard compilers are integrated into Bit using a Bit Aspect. For example, Babel is integrated using the Babel Aspect and TypeScript is integrated using the TypeScript Aspect. These Aspects implement the Compiler interface. A compiler implementation should be able to provide compilation in the workspace as well as compilation during build.',
            component: <ImplementCompiler />,
          },
          {
            path: 'compiler-api',
            title: 'Compiler API',
            component: <CompilerAPI />,
          },
          {
            path: 'multi-compiler',
            title: 'Multi-Compiler',
            description:
              'The multi-compiler aspect allows the configuration of multiple compilers on a component. This determines which compiler to apply on a component file using the isFileSupported() compiler API.',
            component: <MultiCompiler />,
          },
        ],
      },
      {
        path: 'tester',
        title: 'Tester',
        icon: 'tester',
        open: false,
        children: [
          {
            path: 'tester-overview',
            title: 'Tester Overview',
            description: 'The Tester aspect simplifies and standardizes the process of component testing.',
            component: <TesterOverview />,
          },
          {
            path: 'testing-during-development',
            title: 'Testing during Development',
            description:
              'During development, the Tester optimizes for dev experience and performance. It tests modified components, in isolation, to help tackle issues quickly during development.',
            component: <TestingDuringDevelopment />,
          },
          {
            path: 'testing-during-build',
            title: 'Testing during Build',
            description: 'Testing components for distribution is done during build by the Bit Builder.',
            component: <TestingDuringBuild />,
          },
          {
            path: 'configure-env-with-tester',
            title: 'Configure an Env with a Tester',
            component: <ConfigureEnvWithTester />,
          },
          {
            path: 'implement-tester',
            title: 'Implement a Tester',
            component: <ImplementTester />,
          },
        ],
      },
      {
        path: 'docs',
        title: 'Docs',
        icon: 'Ripple_list',
        open: false,
        children: [
          {
            path: 'docs-overview',
            title: 'Docs Overview',
            description:
              'The docs service simplifies the documentation process and provides components with visually rich, custom-made, documentation. It utilizes doc templates to present component docs using the technology and layout that best fits their type.',
            component: <DocsOverview />,
          },
          {
            path: 'mdx',
            title: 'MDX',
            description:
              "The MDX format is perfect for writing documentation for components, as it joins together the ease-of-use and readability of the Markdown syntax with the great flexibility that's enabled by JSX.",
            component: <MDX />,
          },
          {
            path: 'docs-templates',
            title: 'Doc Templates',
            description:
              'Doc templates display doc files content using a specific layout. This layout may also be enriched with additional data provided by the template. Templates are set by Envs to provide doc layout that best fits the Envs components.',
            component: <DocTemplates />,
          },
          {
            path: 'rendering-docs',
            title: 'Rendering Docs',
            description:
              'The Docs aspect uses the Preview aspect to register its docs file and templates for bundling and for rendering in the browser.',
            component: <RenderingDocs />,
          },
        ],
      },
      {
        path: 'compositions',
        title: 'Compositions',
        icon: 'compositions',
        open: false,
        children: [
          {
            path: 'compositions-overview',
            title: 'Compositions Overview',
            description:
              "The Compositions Aspect loads and displays component 'compositions' in an isolated preview environment.",
            component: <CompositionsOverview />,
          },
          {
            path: 'composition-format',
            title: 'Composition Format',
            description:
              'Compositions use the Component Story Format (CSF), an open standard for component examples based on JavaScript ES6 modules.',
            component: <CompositionFormat />,
          },
          {
            path: 'composition-context',
            title: 'Setting a Composition Context',
            description:
              'Compositions often use the same context. One example of that is a common theme. Instead of manually wrapping each composition with providers, set your Env to inject a pre-configured set of provider components.',
            component: <CompositionContext />,
          },
          {
            path: 'mounting-compositions-to-dom',
            title: 'Mounting Compositions to the DOM',
            component: <MountingCompositionsToDom />,
          },
          {
            path: 'compositions-and-stories',
            title: 'Compositions and Stories',
            component: <CompositionsAndStories />,
          },
        ],
      },
      {
        path: 'preview',
        title: 'Preview',
        icon: 'preview',
        open: false,
        children: [
          {
            path: 'overview',
            title: 'Overview',
            component: <PreviewOverview />,
          },
          {
            path: 'preview-during-development',
            title: 'Preview during Development',
            component: <PreviewDuringDevelopment />,
          },
          {
            path: 'preview-during-build',
            title: 'Preview during Build',
            component: <PreviewDuringBuild />,
          },
          {
            path: 'register-custom-preview',
            title: 'Register a Custom Preview',
            component: <RegisterCustomPreview />,
          },
        ],
      },
      {
        path: 'linter',
        title: 'Linter',
        icon: 'linter',
        open: false,
        children: [
          {
            path: 'linter-overview',
            title: 'Overview',
            component: <LinterOverview />,
          },
          {
            path: 'linting-during-development',
            title: 'Linting during Development',
            component: <LintingDuringDevelopment />,
          },
          {
            path: 'linting-during-build',
            title: 'Linting during Build',
            component: <LintingDuringBuild />,
          },
          {
            path: 'configure-env-with-linter',
            title: 'Configure an Env with a Linter',
            component: <ConfigureEnvWithLinter />,
          },
          {
            path: 'implement-linter',
            title: 'Implement a Linter',
            component: <ImplementLinter />,
          },
        ],
      },
      {
        path: 'formatter',
        title: 'Formatter',
        icon: 'formatting',
        open: false,
        children: [
          {
            path: 'formatter-overview',
            title: 'Overview',
            component: <FormatterOverview />,
          },
          {
            path: 'formatting-during-development',
            title: 'Formatting during Development',
            component: <FormattingDuringDevelopment />,
          },
          {
            path: 'formatting-during-build',
            title: 'Formatting during Build',
            component: <FormattingDuringBuild />,
          },
          {
            path: 'configure-env-with-formatter',
            title: 'Configure an Env with a Formatter',
            component: <ConfigureEnvWithFormatter />,
          },
          {
            path: 'implement-formatter',
            title: 'Implement a Formatter',
            component: <ImplementFormatter />,
          },
        ],
      },
    ],
  },
  {
    title: 'Apps',
    path: 'apps',
    icon: 'app',
    open: false,
    children: [
      {
        path: 'apps-overview',
        title: 'Apps overview',
        component: <div />,
      },
      {
        path: 'create-app',
        title: 'Creating an app',
        component: <div />,
      },
      {
        path: 'app-build',
        title: 'App build',
        component: <div />,
      },
      {
        path: 'app-deployment',
        title: 'App deployment',
        component: <div />,
      },
      {
        path: 'application-types',
        title: 'Application types',
        component: <div />,
      },
    ],
  },
  {
    path: 'packages',
    title: 'Packages',
    icon: 'dependencies',
    open: false,
    children: [
      {
        path: 'packages-overview',
        title: 'Packages Overview',
        component: <PackagesOverview />,
      },
      {
        path: 'package-json',
        title: 'package.json',
        component: <PackageJson />,
      },
      {
        path: 'managing-package-json',
        title: 'Managing the package.json',
        component: <ManagingPackageJson />,
      },
      {
        path: 'package-name',
        title: 'Package Name',
        component: <PackageName />,
      },
      {
        path: 'packing-components',
        title: 'Packing Components',
        component: <PackingComponents />,
      },
      {
        path: 'publishing-components-to-commonjs-registries',
        title: 'Publishing to CommonJS Registries',
        component: <CommonjsPackageRegistries />,
      },
      {
        path: 'build-tasks',
        title: 'Build Tasks',
        component: <PkgBuildTasks />,
      },
      {
        path: 'npmrc',
        title: 'Configuring Bit Cloud in NPM config',
        component: <Npmrc />,
      },
    ],
  },
  {
    path: 'tools',
    title: 'Tools',
    open: false,
    icon: 'sort',
    children: [
      {
        path: 'webpack',
        title: 'Webpack',
        icon: 'webpack',
        open: false,
        children: [
          {
            path: 'configure-webpack',
            title: 'Configure Webpack',
            component: <ConfigureWebpck />,
          },
          {
            path: 'module-federation',
            title: 'Module Federation',
            component: <ConfigureWebpck />,
          },
        ],
      },
      {
        title: 'TypeScript',
        path: 'typescript',
        icon: 'typescript',
        open: false,
        children: [
          {
            path: 'configuring-typescript',
            title: 'Configuring Typescript',
          },
        ],
      },
      {
        title: 'Babel',
        path: 'babel',
        open: false,
        icon: 'babel',
        children: [],
      },
      {
        title: 'Jest',
        path: 'jest',
        icon: 'Jest',
        open: false,
        children: [],
      },
      {
        path: 'pnpm',
        title: 'pnpm',
        icon: 'pnpm',
        open: false,
        children: [
          {
            path: 'pnpm',
            title: 'pnpm',
            component: <Pnpm />,
          },
        ],
      },
      {
        path: 'yarn',
        open: false,
        title: 'Yarn',
        icon: 'yarn-logo',
        children: [
          {
            path: 'yarn',
            title: 'Yarn',
            component: <Yarn />,
          },
        ],
      },
    ],
  },
  {
    path: 'frameworks',
    title: 'Frameworks',
    open: false,
    icon: 'code',
    children: [
      {
        path: 'react',
        title: 'React',
        open: false,
        children: [],
      },
      {
        path: 'angular',
        title: 'Angular',
        open: false,
        children: [],
      },
      {
        path: 'node',
        title: 'Node',
        open: false,
        children: [],
      },
      {
        path: 'lit-html',
        title: 'Lit Element',
        open: false,
        children: [],
      },
      {
        path: 'harmony',
        title: 'Harmony',
        open: false,
        children: [],
      },
    ],
  },
  {
    path: 'extending-bit',
    open: false,
    icon: 'Extension',
    title: 'Extending Bit',
    children: [
      {
        path: 'aspect-overview',
        title: 'Aspects overview',
        component: <AspectsOverview />,
      },
      {
        path: 'using-aspects',
        title: 'Using aspects',
        component: <UsingAspects />,
      },
      {
        path: 'create-aspect',
        title: 'Creating aspects',
      },
      {
        path: 'config',
        title: 'Aspect config',
      },
      {
        path: 'slots',
        title: 'Slots',
      },
      {
        path: 'runtimes',
        title: 'Runtimes',
      },
      // {
      //   title: 'Guides',
      //   path: 'guides',
      //   children: [
      //     {
      //       title: 'Adding a tab to the component page',
      //       path: 'adding-tab'
      //     }
      //   ]
      // }
    ],
  },
  // {
  //   path: 'reference',
  //   icon: 'Ripple_list',
  //   open: false,
  //   title: 'Reference',
  //   children: [
  //     {
  //       path: 'cli-reference',
  //       title: 'CLI Reference',
  //       component: <CliReference />,
  //       icon: 'terminal',
  //     },
  //   ],
  // },
];
