import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

/* Getting Started */

const InstallingBit = loadable(() => import('@teambit/docs.content.getting-started.installing-bit'));
const CreateComponents = loadable(
  () => import('@teambit/community.content.getting-started.composing.create-components')
);
const DevEnvs = loadable(() => import('@teambit/docs.content.getting-started.dev-envs'));
const UseDependencies = loadable(() => import('@teambit/docs.content.getting-started.use-dependencies'));
const CreateWorkspace = loadable(() => import('@teambit/docs.content.getting-started.create-workspace'));

const VersionComponents = loadable(() => import('@teambit/docs.content.getting-started.version-components'));
const WhatIsScope = loadable(() => import('@teambit/docs.content.getting-started.what-is-scope'));
const HostBitCloud = loadable(() => import('@teambit/docs.content.getting-started.host-bit-cloud'));
const SelfHostScope = loadable(() => import('@teambit/docs.content.getting-started.self-host-scope'));
const ShareComponents = loadable(() => import('@teambit/docs.content.getting-started.share-components'));
const InstallComponents = loadable(() => import('@teambit/docs.content.getting-started.install-components'));
const ImportComponents = loadable(() => import('@teambit/docs.content.getting-started.import-components'));
const UpdateComponents = loadable(() => import('@teambit/docs.content.getting-started.update-components'));
const CiExport = loadable(() => import('@teambit/docs.content.getting-started.ci-export'));
const CiInstall = loadable(() => import('@teambit/docs.content.getting-started.ci-install'));

/* Harmony */
const CliReference = loadable(() => import('@teambit/harmony.content.cli-reference'));
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

/**
 * Scope
 */
const ScopeOverview = loadable(() => import('@teambit/scope.content.scope-overview'));

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

export const docsRoutes: DocsRoute[] = [
  {
    path: 'getting-started',
    title: 'Getting Started',
    icon: 'Ripple_play',
    children: [
      {
        path: 'installing-bit',
        title: 'Installing Bit',
        description: 'Installing Bit',
        component: <InstallingBit />,
      },
      {
        path: 'create-new-workspace',
        title: 'Create a new Workspace',
        description: 'Create a new Workspace',
        component: <CreateWorkspace />,
      },
      {
        path: 'composing',
        title: 'Compose',
        icon: 'compose',
        open: false,
        children: [
          {
            path: 'create-components',
            title: 'Create Components',
            description: 'Create components',
            component: <CreateComponents />,
          },
          {
            path: 'dev-environments',
            title: 'Dev environments',
            description: 'Dev environments',
            component: <DevEnvs />,
          },
          {
            path: 'use-dependencies',
            title: 'Use dependencies',
            description: 'Use dependencies',
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
            path: 'version-components',
            title: 'Version Components',
            description: 'Version Components',
            component: <VersionComponents />,
          },
          {
            path: 'remote-scope',
            title: 'Create a Remote Scope',
            open: false,
            children: [
              {
                path: 'scope-overview',
                title: 'Scope Overview',
                description: 'Scope Overview',
                component: <WhatIsScope />,
              },
              {
                path: 'host-on-bit-cloud',
                title: 'Host on Bit Cloud',
                description: 'Host on Bit Cloud',
                component: <HostBitCloud />,
              },
              {
                path: 'self-host-scope',
                title: 'Self Host Scope',
                description: 'Self Host Scope',
                component: <SelfHostScope />,
              },
            ],
          },
          {
            path: 'share-components',
            title: 'Share Components',
            description: 'Share Components',
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
            description: 'Install Components',
            component: <InstallComponents />,
          },
          {
            path: 'import-components',
            title: 'Import Components',
            description: 'Import Components',
            component: <ImportComponents />,
          },
          {
            path: 'update-components',
            title: 'Update Components',
            description: 'Update Components',
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
            description: 'Automate Component Export',
            component: <CiExport />,
          },
          {
            path: 'package-consumers',
            title: 'Package Consumers',
            description: 'Package Consumers',
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
    config: {
      path: 'workspace-configuration',
      component: <WorkspaceConfiguration />,
      title: 'Workspace configuration',
    },
    children: [
      {
        path: 'workspace-overview',
        title: 'Workspace overview',
        component: <WorkspaceOverview />,
      },
      {
        path: 'creating-workspaces',
        title: 'Creating workspaces',
        component: <CreatingWorkspaces />,
      },
      {
        path: 'directory-structure',
        title: 'Directory structure',
        component: <DirectoryStructure />,
      },
      {
        path: 'creating-components',
        title: 'Creating components',
        component: <CreatingWorkspaces />,
      },
      {
        path: 'component-directory',
        title: 'Component directory',
        component: <ComponentDir />,
      },
      {
        path: 'workspace-status',
        title: 'Workspace status',
        component: <WorkspaceStatus />,
      },
      {
        path: 'moving-components',
        title: 'Moving components',
        component: <MovingComponents />,
      },
      {
        path: 'importing-components',
        title: 'Importing components',
        component: <ImportingComponents />,
      },
      {
        path: 'exporting-components',
        title: 'Exporting components',
        component: <ExportingComponents />,
      },
      {
        path: 'variants',
        title: 'Configuration variants',
        component: <Variants />,
      },
      {
        path: 'removing-components',
        title: 'Removing components',
        component: <RemovingDeprecating />,
      },
      {
        path: 'bitmap',
        title: 'bitmap',
        component: <Bitmap />,
      },
      {
        path: 'component-links',
        title: 'Workspace component link',
        component: <WorkspaceLink />,
      },
      {
        path: 'configuring-remote-scopes',
        title: 'Configuring remote scopes',
        component: <ConfiguringRemoteScopes />,
      },
      {
        path: 'local-scope',
        title: 'Local scope',
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
        title: 'Component overview',
        component: <ComponentOverview />,
      },
      {
        path: 'component-anatomy',
        title: 'Component anatomy',
        component: <ComponentAnatomy />,
      },
      {
        path: 'component-config',
        title: 'Component configuration',
        component: <ComponentConfig />,
      },
      {
        path: 'tags',
        title: 'Tags',
        component: <Tags />,
      },
      {
        path: 'snaps',
        title: 'Snaps',
        component: <Snaps />,
      },
      {
        path: 'lanes',
        title: 'Lanes',
        component: <Snaps />,
      },
      {
        path: 'component-history',
        title: 'Component history',
        component: <Snaps />,
      },
      {
        path: 'navigating-history',
        title: 'Moving in history',
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
        component: <ComponentId />,
      },
      {
        path: 'component-main-file',
        title: 'Main file',
        component: <MainFile />,
      },
      // {
      //   path: 'component-json',
      //   title: 'component.json',
      //   component: <ComponentJson />,
      // },
      {
        path: 'dev-files',
        title: 'Dev files',
        component: <DevFiles />,
      },
      {
        path: 'inspecting-components',
        title: 'Inspecting components',
        component: <InspectingComponents />,
      },
      {
        path: 'component-capsules',
        title: 'Component capsules',
        component: <Capsule />,
      },
      {
        path: 'component-objects',
        title: 'Component objects',
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
        title: 'Dependencies overview',
        component: <DependenciesOverview />,
      },
      {
        path: 'dependency-installation',
        title: 'Dependency installation',
        component: <DependencyInstallation />,
      },
      {
        path: 'dependency-policies',
        title: 'Dependency policies',
        component: <DependencyPolicies />,
      },
      {
        path: 'configuring-dependencies',
        title: 'Configuring dependencies',
        component: <ConfiguringDependencies />,
      },
      {
        path: 'updates',
        title: 'Dependency updates',
      },
      {
        path: 'package-managers',
        title: 'Package managers',
        component: <PackageManagers />,
      },
      {
        path: 'external-dependencies',
        title: 'External dependencies',
        component: <ExternalDependencies />,
      },
      {
        path: 'node-modules',
        title: 'node_modules',
        component: <NodeModules />,
      },
      // {
      //   path: 'dependency-resolution',
      //   title: 'Dependency resolution',
      //   component: <DependencyResolution />,
      // },
      {
        path: 'cyclic-dependencies',
        title: 'Cyclic dependencies',
      },
      {
        path: 'lock-files',
        title: 'Lock files',
        component: <LockFiles />,
      },
      {
        path: 'inspecting-dependencies',
        title: 'Inspecting dependencies',
      },
    ],
  },
  {
    path: 'scope',
    open: false,
    title: 'Scope',
    icon: 'collection',
    children: [
      {
        path: 'scope-overview',
        title: 'Scope overview',
        component: <ScopeOverview />,
      },
      {
        path: 'creating-scopes',
        title: 'Creating scopes',
        component: <ScopeOverview />,
      },
      {
        path: 'configuring-scopes',
        title: 'Configuring scopes',
        component: <ScopeOverview />,
      },
      {
        path: 'running-a-scope-server',
        title: 'Hosting scopes',
        component: <ScopeOverview />,
      },
      {
        path: 'inspecting-objects',
        title: 'Inspecting scope objects',
        component: <ScopeOverview />,
      },
      {
        path: 'extending-scopes',
        title: 'Extending scopes',
        component: <ScopeOverview />,
      },
    ],
  },
  {
    path: 'envs',
    title: 'Envs',
    icon: 'Internal',
    open: false,
    children: [
      {
        path: 'envs-overview',
        title: 'Envs overview',
      },
      {
        path: 'inspecting-env',
        title: 'Inspecting an Env',
        component: <InspectingEnv />,
      },
      {
        path: 'extending-env',
        title: 'Extending an Env',
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
    title: 'Apps',
    path: 'apps',
    icon: 'app',
    open: false,
    children: [],
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
    path: 'dev-services',
    title: 'Dev Services',
    icon: 'compCI',
    open: false,
    children: [
      {
        path: 'dev-services-overview',
        title: 'Dev Services Overview',
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
            component: <BuilderOverview />,
          },
          {
            path: 'build-pipelines',
            title: 'Build Pipelines',
            component: <BuildPipelines />,
          },
          {
            path: 'build-tasks',
            title: 'Build Tasks',
            component: <BuildTasks />,
          },
          {
            path: 'build-artifacts',
            title: 'Build Artifacts',
            component: <BuildArtifacts />,
          },
          {
            path: 'capsule',
            title: 'Caspule',
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
            title: 'Generator overview',
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
            title: 'Overview',
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
            title: 'Overview',
            component: <TesterOverview />,
          },
          {
            path: 'testing-during-development',
            title: 'Testing during Development',
            component: <TestingDuringDevelopment />,
          },
          {
            path: 'testing-during-build',
            title: 'Testing during Build',
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
            title: 'Overview',
            component: <DocsOverview />,
          },
          {
            path: 'mdx',
            title: 'MDX',
            component: <MDX />,
          },
          {
            path: 'docs-templates',
            title: 'Doc Templates',
            component: <DocTemplates />,
          },
          {
            path: 'rendering-docs',
            title: 'Rendering Docs',
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
            title: 'Overview',
            component: <CompositionsOverview />,
          },
          {
            path: 'composition-format',
            title: 'Composition Format',
            component: <CompositionFormat />,
          },
          {
            path: 'composition-context',
            title: 'Setting a Composition Context',
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
        children: [],
      },
      {
        path: 'angular',
        title: 'Angular',
        children: [],
      },
      {
        path: 'node',
        title: 'Node',
        children: [],
      },
      {
        path: 'lit-html',
        title: 'Lit Element',
        children: [],
      },
      {
        path: 'harmony',
        title: 'Harmony',
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
  {
    path: 'reference',
    icon: 'Ripple_list',
    open: false,
    title: 'Reference',
    children: [
      {
        path: 'cli-reference',
        title: 'CLI Reference',
        component: <CliReference />,
        icon: 'terminal',
      },
    ],
  },
];
