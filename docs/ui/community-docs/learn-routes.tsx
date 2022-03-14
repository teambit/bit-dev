import React from 'react';
import { lazy } from '@loadable/component';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

/* Getting Started */

// const InstallingBit = lazy(() => import('@teambit/docs.content.getting-started.installing-bit'));
const CreateComponents = lazy(() => import('@teambit/community.content.getting-started.composing.create-components'));

/* Harmony */
// const CliReference = lazy(() => import('@teambit/harmony.content.cli-reference'));
const AspectsOverview = lazy(() => import('@teambit/harmony.content.aspects-overview'));
const UsingAspects = lazy(() => import('@teambit/harmony.content.using-aspects'));

/* Workspace */
// const WorkspaceOverview = lazy(() => import('@teambit/workspace.content.workspace-overview'));
const Bitmap = lazy(() => import('@teambit/workspace.content.bitmap'));
const WorkspaceLink = lazy(() => import('@teambit/workspace.content.workspace-link'));
const DirectoryStructure = lazy(() => import('@teambit/workspace.content.directory-structure'));
const ComponentDir = lazy(() => import('@teambit/workspace.content.component-directory'));
const WorkspaceStatus = lazy(() => import('@teambit/workspace.content.workspace-status'));
const ClearingCache = lazy(() => import('@teambit/workspace.content.clearing-cache'));
const WorkspaceConfiguration = lazy(() => import('@teambit/workspace.content.workspace-configuration'));
const ImportingComponents = lazy(() => import('@teambit/workspace.content.importing-components'));
const ExportingComponents = lazy(() => import('@teambit/workspace.content.exporting-components'));
const CreatingWorkspaces = lazy(() => import('@teambit/workspace.content.creating-workspaces'));
const ConfiguringRemoteScopes = lazy(() => import('@teambit/workspace.content.configuring-remote-scopes'));
const LocalScope = lazy(() => import('@teambit/workspace.content.local-scope'));
const MovingComponents = lazy(() => import('@teambit/workspace.content.moving-components'));
const Variants = lazy(() => import('@teambit/workspace.content.variants'));

/* Scope */
const ScopeBitCloud = lazy(() => import('@teambit/scope.content.scope-bit-cloud'));
const RemoteScopes = lazy(() => import('@teambit/scope.content.remote-scopes'));
const ScopeOverview = lazy(() => import('@teambit/scope.content.scope-overview'));
const CreatingScopes = lazy(() => import('@teambit/scope.content.creating-scopes'));
const ScopeJson = lazy(() => import('@teambit/scope.content.scope-json'));
const HostingScopes = lazy(() => import('@teambit/scope.content.hosting-scopes'));

/* Dev services */
// const AvailableServices = lazy(() => import('@teambit/envs.content.available-services'));
const DevServices = lazy(() => import('@teambit/envs.content.dev-services'));
// const DevServicesOverview = lazy(() => import('@teambit/envs.content.dev-services-overview'));

/* Generator */
const GeneratorOverview = lazy(() => import('@teambit/generator.content.generator-overview'));
const GenerateComponent = lazy(() => import('@teambit/generator.content.generate-component'));
const GenerateWorkspace = lazy(() => import('@teambit/generator.content.generate-workspace'));

/* Preview */

const PreviewOverview = lazy(() => import('@teambit/preview.content.preview-overview'));
const PreviewDuringBuild = lazy(() => import('@teambit/preview.content.preview-during-build'));
const PreviewDuringDevelopment = lazy(() => import('@teambit/preview.content.preview-during-development'));

const RegisterCustomPreview = lazy(() => import('@teambit/preview.content.register-custom-preview'));

/* Tester */
const TesterOverview = lazy(() => import('@teambit/defender.content.tester-overview'));
const TestingDuringDevelopment = lazy(() => import('@teambit/defender.content.testing-during-development'));
const TestingDuringBuild = lazy(() => import('@teambit/defender.content.testing-during-build'));
const ConfigureEnvWithTester = lazy(() => import('@teambit/defender.content.configure-env-with-tester'));
const ImplementTester = lazy(() => import('@teambit/defender.content.implement-tester'));

/* Linter */

const LinterOverview = lazy(() => import('@teambit/defender.content.linter-overview'));
const LintingDuringDevelopment = lazy(() => import('@teambit/defender.content.linting-during-development'));
const LintingDuringBuild = lazy(() => import('@teambit/defender.content.linting-during-build'));
const ConfigureEnvWithLinter = lazy(() => import('@teambit/defender.content.configure-env-with-linter'));
const ImplementLinter = lazy(() => import('@teambit/defender.content.implement-linter'));

/* Formatter */

const FormatterOverview = lazy(() => import('@teambit/defender.content.formatter-overview'));
const FormattingDuringDevelopment = lazy(() => import('@teambit/defender.content.formatting-during-development'));
const FormattingDuringBuild = lazy(() => import('@teambit/defender.content.formatting-during-build'));
const ConfigureEnvWithFormatter = lazy(() => import('@teambit/defender.content.configure-env-with-formatter'));
const ImplementFormatter = lazy(() => import('@teambit/defender.content.implement-formatter'));

/* Compiler  */

const CompilerOverview = lazy(() => import('@teambit/compilation.content.compiler-overview'));
const CompilingDuringDevelopment = lazy(() => import('@teambit/compilation.content.compiling-during-development'));
const CompilingDuringBuild = lazy(() => import('@teambit/compilation.content.compiling-during-build'));
const ConfigureEnvWithCompiler = lazy(() => import('@teambit/compilation.content.configure-env-with-compiler'));
const ImplementCompiler = lazy(() => import('@teambit/compilation.content.implement-compiler'));
const CompilerAPI = lazy(() => import('@teambit/compilation.content.compiler-api'));
const MultiCompiler = lazy(() => import('@teambit/compilation.content.multi-compiler'));
// const ConfigureWebpck = lazy(() => import('@teambit/webpack.content.configure-webpack'));

/* Builder */

const BuilderOverview = lazy(() => import('@teambit/pipelines.content.builder-overview'));
const BuildPipelines = lazy(() => import('@teambit/pipelines.content.build-pipelines'));
const BuildTasks = lazy(() => import('@teambit/pipelines.content.build-tasks'));
const BuildArtifacts = lazy(() => import('@teambit/pipelines.content.build-artifacts'));
const Capsule = lazy(() => import('@teambit/component.content.capsule'));
// const BuildTaskApi = lazy(() => import('@teambit/pipelines.content.build-task-api'));
// const BuildArtifactsApi = lazy(() => import('@teambit/pipelines.content.build-artifacts-api'));
const UsingBuildTask = lazy(() => import('@teambit/pipelines.content.using-build-task'));

/* Docs */

const DocsOverview = lazy(() => import('@teambit/docs.content.docs-overview'));
const MDX = lazy(() => import('@teambit/docs.content.mdx'));
const DocTemplates = lazy(() => import('@teambit/docs.content.doc-templates'));
const RenderingDocs = lazy(() => import('@teambit/docs.content.rendering-docs'));

/* Compositions */

const CompositionsOverview = lazy(() => import('@teambit/compositions.content.compositions-overview'));
const CompositionFormat = lazy(() => import('@teambit/compositions.content.composition-format'));
const CompositionContext = lazy(() => import('@teambit/compositions.content.composition-context'));
const MountingCompositionsToDom = lazy(() => import('@teambit/compositions.content.mounting-compositions-to-dom'));
const CompositionsAndStories = lazy(() => import('@teambit/compositions.content.compositions-and-stories'));

/* Components */

const NavigateHistory = lazy(() => import('@teambit/component.content.navigate-history'));
const ComponentId = lazy(() => import('@teambit/component.content.component-id'));
const ComponentOverview = lazy(() => import('@teambit/component.content.component-overview'));
const RemovingDeprecating = lazy(() => import('@teambit/docs.content.guides.removing-deprecating-components'));
const MergingComponentVersions = lazy(() => import('@teambit/docs.content.guides.merging-component-versions'));
const MainFile = lazy(() => import('@teambit/component.content.component-main-file'));
const ComponentConfig = lazy(() => import('@teambit/component.content.component-config'));
const ComponentJson = lazy(() => import('@teambit/component.content.component-json'));
const ComponentObjects = lazy(() => import('@teambit/component.content.component-objects'));
const DevFiles = lazy(() => import('@teambit/component.content.dev-files'));
// const InspectingComponents = lazy(() => import('@teambit/component.content.inspecting-components'));
const Tags = lazy(() => import('@teambit/component.content.tags'));
const Snaps = lazy(() => import('@teambit/component.content.snaps'));
const ComponentAnatomy = lazy(() => import('@teambit/component.content.component-anatomy'));
const AddingComponents = lazy(() => import('@teambit/component.content.adding-components'));

/* Envs */
const EnvsOverview = lazy(() => import('@teambit/envs.content.envs-overview'));
const InspectingEnv = lazy(() => import('@teambit/envs.content.inspecting-env'));
const ExtendingEnv = lazy(() => import('@teambit/envs.content.extending-env'));
const UsingEnvs = lazy(() => import('@teambit/envs.content.using-envs'));
const EnvsApi = lazy(() => import('@teambit/envs.content.envs-api'));

/* Dependencies */

const InspectingDependencies = lazy(() => import('@teambit/dependencies.content.inspecting-dependencies'));
const DependenciesOverview = lazy(() => import('@teambit/dependencies.content.dependencies-overview'));
const ExternalDependencies = lazy(() => import('@teambit/dependencies.content.external-dependencies'));
const DependencyPolicies = lazy(() => import('@teambit/dependencies.content.dependency-policies'));
const ConfiguringDependencies = lazy(() => import('@teambit/dependencies.content.configuring-dependencies'));
const DependenciesConfiguration = lazy(() => import('@teambit/dependencies.content.dependencies-configuration'));
const DependencyInstallation = lazy(() => import('@teambit/dependencies.content.installing-dependencies'));
// const DependencyResolution = lazy(() => import('@teambit/dependencies.content.dependency-resolution'));
const LockFiles = lazy(() => import('@teambit/dependencies.content.lock-files'));
// const Pnpm = lazy(() => import('@teambit/dependencies.content.pnpm'));
// const Yarn = lazy(() => import('@teambit/dependencies.content.yarn'));
const NodeModules = lazy(() => import('@teambit/dependencies.content.node-modules'));
const PackageManagers = lazy(() => import('@teambit/dependencies.content.package-managers'));

/* Packages */

const PackagesOverview = lazy(() => import('@teambit/pkg.content.packages-overview'));
const PackageJson = lazy(() => import('@teambit/pkg.content.package-json'));
const ManagingPackageJson = lazy(() => import('@teambit/pkg.content.managing-package-json'));
const PackageName = lazy(() => import('@teambit/pkg.content.package-name'));
const PackingComponents = lazy(() => import('@teambit/pkg.content.packing-components'));
const CommonjsPackageRegistries = lazy(() => import('@teambit/pkg.content.commonjs-package-registries'));
const PkgBuildTasks = lazy(() => import('@teambit/pkg.content.pkg-build-tasks'));
const Npmrc = lazy(() => import('@teambit/pkg.content.npmrc'));

/* Reference */

const UsingBVM = lazy(() => import('@teambit/docs.content.guides.using-bvm'));
const CliReference = lazy(() => import('@teambit/harmony.content.cli-reference'));

/* Global Config */
const BitConfig = lazy(() => import('@teambit/docs.content.guides.bit-config'));
const ConfigFiles = lazy(() => import('@teambit/docs.content.guides.config-files'));

/* React */
const ReactOverview = lazy(() => import('@teambit/react.content.react-overview'));
const ReplacingReactTools = lazy(() => import('@teambit/react.content.replace-react-tools'));
const ConfigReactTools = lazy(() => import('@teambit/react.content.config-react-tools'));

/* Misc */
const UsageAnalytics = lazy(() => import('@teambit/docs.content.guides.usage-analytics'));

export const learnDocsRoutes: DocsRoute[] = [
  {
    path: 'usage-analytics',
    title: 'Usage Analytics',
    displayInSidebar: false,
    component: <UsageAnalytics />,
  },
  {
    path: 'workspace',
    title: 'Workspace',
    icon: 'workspace',
    open: false,
    // overview: {
    //   path: 'workspace-overview',
    //   title: 'Workspace Overview',
    //   component: <WorkspaceOverview />,
    // },
    children: [
      {
        path: 'workspace-configuration',
        component: <WorkspaceConfiguration />,
        title: 'Workspace configuration',
      },
      {
        path: 'creating-workspaces',
        title: 'Creating workspaces',
        component: <CreatingWorkspaces />,
      },
      {
        path: 'creating-components',
        title: 'Creating components',
        component: <CreateComponents />,
      },
      {
        path: 'directory-structure',
        title: 'Directory structure',
        description:
          'The Bit Workspace is flexible in directory structure to preserve a seamless dev experience for building distributed apps.',
        component: <DirectoryStructure />,
      },
      {
        path: 'component-directory',
        title: 'Component directory',
        description:
          'A Component Directory is a directory in the developer Workspace. Directories are mapped as Components using the .bitmap rootDir property which exist for every Component entry.',
        component: <ComponentDir />,
      },
      {
        path: 'workspace-status',
        title: 'Workspace status',
        description:
          "Bit' workspace track changes done to components, and shows the state of each in your project's workspace.",
        component: <WorkspaceStatus />,
      },
      {
        path: 'moving-components',
        title: 'Moving components',
        description: 'To move a component you can use the bit move command.',
        component: <MovingComponents />,
      },
      {
        path: 'variants',
        title: 'Configuration variants',
        description: 'Variants enables you to configure group of components with Component configuration.',
        component: <Variants />,
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
        description:
          'The Local Scope is located in the .bit or .git/bit directory at the root of the Workspace. It is where component versions (snapshots) are stored.',
        component: <LocalScope />,
      },
      {
        path: 'clearing-cache',
        title: 'Clearing cache',
        component: <ClearingCache />,
      },
    ],
  },
  {
    path: 'components',
    title: 'Components',
    icon: 'comps',
    open: false,
    // overview: {
    //   path: 'component-overview',
    //   title: 'Component Overview',
    //   description:
    //     'Component is a decoupled, versioned source-code container designed for the purpose of containing a single module or component.',
    //   component: <ComponentOverview />,
    // },
    children: [
      {
        path: 'component-overview',
        title: 'Component overview',
        description:
          'Component is a decoupled, versioned source-code container designed for the purpose of containing a single module or component.',
        component: <ComponentOverview />,
      },
      {
        path: 'adding-components',
        title: 'Adding components',
        description: 'Add a new component to be managed by Bit.',
        component: <AddingComponents />,
      },
      {
        path: 'component-config',
        title: 'Component configuration',
        component: <ComponentConfig />,
      },
      {
        path: 'component-id',
        title: 'Component ID',
        description:
          'The Component ID is designed to be a unique, human-readable name that simplifies and help organize components.',
        component: <ComponentId />,
      },
      {
        path: 'component-anatomy',
        title: 'Component anatomy',
        description: 'How Bit manages all data on a component.',
        component: <ComponentAnatomy />,
      },
      // {
      //   path: 'inspecting-components',
      //   title: 'Inspecting components',
      //   component: <InspectingComponents />,
      // },
      {
        path: 'component-main-file',
        title: 'Main file',
        description: 'Main file exposes the Component API.',
        component: <MainFile />,
      },
      {
        path: 'dev-files',
        title: 'Dev files',
        description:
          'Dev files are component files used for development and not for production. Dev files are determined as such by the Dev Files Aspect.',
        component: <DevFiles />,
      },
      {
        path: 'snaps',
        title: 'Snapping changes',
        description: 'Record component history with snapshots.',
        component: <Snaps />,
      },
      {
        path: 'tags',
        title: 'Tagging changes',
        description: 'Manage component releases with semantic version.',
        component: <Tags />,
      },
      {
        path: 'navigating-history',
        title: 'Navigating history',
        component: <NavigateHistory />,
      },
      {
        path: 'exporting-components',
        title: 'Exporting components',
        description: 'Share component snaps and versions for consumers and collaborators.',
        component: <ExportingComponents />,
      },
      {
        path: 'removing-components',
        title: 'Deprecating and removing',
        description: 'Mark components as irrelevant or obsolete..',
        component: <RemovingDeprecating />,
      },
      {
        path: 'importing-components',
        title: 'Importing components',
        description:
          'Importing is the process of copying Components from their Scope to the Local Scope, to use and maintain them in the Workspace.',
        component: <ImportingComponents />,
      },
      {
        title: 'Merge conflicts',
        path: 'merge-conflicts',
        component: <MergingComponentVersions />,
      },
      {
        path: 'component-json',
        title: 'component.json',
        component: <ComponentJson />,
      },
      {
        path: 'component-capsules',
        title: 'Component capsules',
        description:
          'A capsule is an isolated component environment. It is mainly implemented as a directory that hosts a component outside its workspace directory.',
        component: <Capsule />,
      },
      {
        path: 'component-objects',
        title: 'Component objects',
        description: 'How Bit saves revision history for components',
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
      title: 'Dependencies Configuration',
      component: <DependenciesConfiguration />,
    },
    children: [
      {
        path: 'dependencies-overview',
        title: 'Dependencies overview',
        description:
          'Dependency management is a major concern for developers looking to build and deliver components independently.',
        component: <DependenciesOverview />,
      },
      {
        path: 'dependency-installation',
        title: 'Dependency installation',
        description:
          "Bit's dependency resolver ensures Workspace Components and External Dependencies are resolved and kept up to date.",
        component: <DependencyInstallation />,
      },
      {
        path: 'dependency-policies',
        title: 'Dependency policies',
        description:
          'Component dependencies are defined in Bit through dependency policies. A dependency policy is definition of a set of dependencies, with a SemVer range, allowed to use from components in your development workspace.',
        component: <DependencyPolicies />,
      },
      {
        path: 'configuring-dependencies',
        title: 'Configuring dependencies',
        description: 'Control component dependency policies.',
        component: <ConfiguringDependencies />,
      },
      {
        path: 'inspecting-dependencies',
        title: 'Inspecting dependencies',
        description: 'See your component dependencies',
        component: <InspectingDependencies />,
      },
      {
        path: 'updates',
        title: 'Dependency updates',
      },
      {
        path: 'package-managers',
        title: 'Package managers',
        description:
          "Bit's Package Manager Aspect encapsulates Yarn, pnpm, NPM or any other supported CommonJS package manager using the bit install command.",
        component: <PackageManagers />,
      },
      {
        path: 'external-dependencies',
        title: 'External dependencies',
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
        title: 'Cyclic dependencies',
      },
      {
        path: 'lock-files',
        title: 'Lock files',
        description:
          'A lock file is a representation of the node_modules directory, written in a YAML format. It is automatically generated and updated, whenever the node_modules directory structure is modified by the package manager (when packages are either installed or removed).',
        component: <LockFiles />,
      },
    ],
  },
  {
    path: 'scope',
    open: false,
    title: 'Scope',
    icon: 'collection',
    // overview:
    children: [
      {
        path: 'scope-overview',
        title: 'Scope overview',
        description: 'Scope is a server for hosting components.',
        component: <ScopeOverview />,
      },
      {
        path: 'scope-bit-cloud',
        title: 'Scopes on bit.cloud',
        description: 'Bit.cloud is a cloud hosting provider for Bit Scopes and Components.',
        component: <ScopeBitCloud />,
      },
      {
        path: 'creating-scopes',
        title: 'Create bare scope',
        description: 'Base Scopes used as remote storage for components.',
        component: <CreatingScopes />,
      },
      {
        path: 'configure-scopes',
        title: 'Configure scopes',
        component: <ScopeJson />,
      },
      {
        path: 'running-a-scope-server',
        title: 'Hosting scopes',
        component: <HostingScopes />,
      },
      {
        path: 'remote-scopes',
        title: 'Remotes',
        description: 'Connect scopes and workspace with remotes.',
        component: <RemoteScopes />,
      },
      // {
      //   path: 'extending-scopes',
      //   title: 'Extending Scopes',
      //   component: <div />,
      // },
    ],
  },
  {
    path: 'envs',
    title: 'Envs',
    icon: 'env',
    open: false,
    // overview:
    children: [
      {
        path: 'envs-overview',
        title: 'Envs overview',
        component: <EnvsOverview />,
      },
      {
        path: 'using-envs',
        title: 'Using envs',
        component: <UsingEnvs />,
      },
      {
        path: 'inspecting-env',
        title: 'Inspecting an env',
        description: '',
        component: <InspectingEnv />,
      },
      {
        path: 'composing-env',
        title: 'Composing an env',
        description: 'Extend existing envs to create your unique workflow.',
        component: <ExtendingEnv />,
      },
      {
        path: 'dev-services',
        title: 'Dev services',
        description: 'Development Services control various workflows and commands for components.',
        component: <DevServices />,
      },
      {
        path: 'envs-api',
        title: 'Envs API',
        component: <EnvsApi />,
      },
    ],
  },
  {
    path: 'dev-services-overview',
    title: 'Dev services',
    icon: 'compCI',
    open: false,
    // overview: {
    //   path: 'dev-services-overview',
    //   title: 'Dev services overview',
    //   component: <DevServicesOverview />,
    // },
    children: [
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
            title: 'Build pipelines',
            description:
              'The Builder runs three separate build pipelines, the basic build pipeline, the snap pipeline and the tag pipeline.',
            component: <BuildPipelines />,
          },
          {
            path: 'implement-build-task',
            title: 'Implement a build task',
            component: <BuildTasks />,
            description: 'Add a build task to your component build pipeline.',
          },
         /* {
            path: 'build-task-api',
            title: 'Build task API',
            component: <BuildTaskApi />,
          },*/
          {
            path: 'using-build-tasks',
            title: 'Using build tasks',
            component: <UsingBuildTask />,
          },
          {
            path: 'build-artifacts',
            title: 'Build artifacts',
            description:
              'Artifacts are files that are generated by a build task, and persisted in the component objects (the component version).',
            component: <BuildArtifacts />,
          },
          /*{
            path: 'build-artifacts-api',
            title: 'Build artifacts API',
            component: <BuildArtifactsApi />,
          },*/
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
            title: 'Overview',
            component: <GeneratorOverview />,
          },
          {
            path: 'generate-component',
            title: 'Custom component generator',
            component: <GenerateComponent />,
          },
          {
            path: 'generate-workspace',
            title: 'Custom workspace generator',
            component: <GenerateWorkspace />,
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
            title: 'Compiler overview',
            description: 'The Compiler aspect simplifies and standardizes the process of the compiling components.',
            component: <CompilerOverview />,
          },
          {
            path: 'compiling-during-development',
            title: 'Compiling during development',
            component: <CompilingDuringDevelopment />,
          },
          {
            path: 'compiling-during-build',
            title: 'Compiling during build',
            component: <CompilingDuringBuild />,
          },
          {
            path: 'using-a-compiler',
            title: 'Using a compiler',
            description: 'Learn how to configure an Env to use a different compiler.',
            component: <ConfigureEnvWithCompiler />,
          },
          {
            path: 'implement-compiler',
            title: 'Implement a compiler',
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
            title: 'Multi compiler',
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
            title: 'Tester overview',
            description: 'The Tester aspect simplifies and standardizes the process of component testing.',
            component: <TesterOverview />,
          },
          {
            path: 'testing-during-development',
            title: 'Testing during development',
            description:
              'During development, the Tester optimizes for dev experience and performance. It tests modified components, in isolation, to help tackle issues quickly during development.',
            component: <TestingDuringDevelopment />,
          },
          {
            path: 'testing-during-build',
            title: 'Testing during build',
            description: 'Testing components for distribution is done during build by the Bit Builder.',
            component: <TestingDuringBuild />,
          },
          {
            path: 'configure-env-with-tester',
            title: 'Configure an env with a tester',
            component: <ConfigureEnvWithTester />,
          },
          {
            path: 'implement-tester',
            title: 'Implement a tester',
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
            title: 'Docs overview',
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
            title: 'Doc templates',
            description:
              'Doc templates display doc files content using a specific layout. This layout may also be enriched with additional data provided by the template. Templates are set by Envs to provide doc layout that best fits the Envs components.',
            component: <DocTemplates />,
          },
          {
            path: 'rendering-docs',
            title: 'Rendering docs',
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
            title: 'Compositions overview',
            description:
              "The Compositions Aspect loads and displays component 'compositions' in an isolated preview environment.",
            component: <CompositionsOverview />,
          },
          {
            path: 'composition-format',
            title: 'Composition format',
            description:
              'Compositions use the Component Story Format (CSF), an open standard for component examples based on JavaScript ES6 modules.',
            component: <CompositionFormat />,
          },
          {
            path: 'composition-context',
            title: 'Setting a composition context',
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
            title: 'Compositions and stories',
            description:
              'Compositions and Stories can appear quite similar. Almost like two sibling solutions that solve the same problem.',
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
            title: 'Preview overview',
            description:
              'The Preview Aspect enables component visualizations to be displayed by the browser, in an isolated Preview environment that is agnostic to the way visualizations are implemented (their framework, etc).',
            component: <PreviewOverview />,
          },
          {
            path: 'preview-during-development',
            title: 'Preview during development',
            description:
              'During development (in the workspace) component previews are generated using dedicated dev servers that run in parallel to the UI server.',
            component: <PreviewDuringDevelopment />,
          },
          {
            path: 'preview-during-build',
            title: 'Preview during build',
            description:
              'The Preview Aspect registers its own Build Task to generate preview artifacts during build time (bit build).',
            component: <PreviewDuringBuild />,
          },
          {
            path: 'register-custom-preview',
            title: 'Register a custom preview',
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
            title: 'Linter overview',
            description:
              'Linting helps us maintain consistent code styling and avoid potential bugs by analyzing our source code, statically, before it is compiled and executed.',
            component: <LinterOverview />,
          },
          {
            path: 'linting-during-development',
            title: 'Linting during development',
            description: 'During development, Bit lints your components using the bit lint.',
            component: <LintingDuringDevelopment />,
          },
          {
            path: 'linting-during-build',
            title: 'Linting during build',
            component: <LintingDuringBuild />,
          },
          {
            path: 'configure-env-with-linter',
            title: 'Configure an env with a linter',
            component: <ConfigureEnvWithLinter />,
          },
          {
            path: 'implement-linter',
            title: 'Implement a linter',
            description:
              'Standard linter like Eslint are integrated into Bit using a Bit Aspect . For example, the Eslint Aspect.',
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
            title: 'Formatter overview',
            description:
              "Formatter helps you format your components' code according to a pre-defined set of styling rules.",
            component: <FormatterOverview />,
          },
          {
            path: 'formatting-during-development',
            title: 'Formatting during development',
            description:
              'During development, Bit formats your components using the bit format commands. This command provides a standard dev experience for formatting the code of any kind of Component, whether it is a NodeJS modules, a React component or anything else.',
            component: <FormattingDuringDevelopment />,
          },
          {
            path: 'formatting-during-build',
            title: 'Formatting during build',
            component: <FormattingDuringBuild />,
          },
          {
            path: 'configure-env-with-formatter',
            title: 'Configure an env with a formatter',
            component: <ConfigureEnvWithFormatter />,
          },
          {
            path: 'implement-formatter',
            title: 'Implement a formatter',
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
        path: 'using-apps',
        title: 'Using apps',
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
        title: 'Packages overview',
        description:
          "Part of a Component's release process includes generating a standard node package. This ensures components are consumable in any project (Bit or non-Bit).",
        component: <PackagesOverview />,
      },
      {
        path: 'package-json',
        title: 'package.json',
        description:
          'A package file is generated by the Pkg aspect in Component Capsules and Workspace Component Links, and included in the generated package for each Component.',
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
        description:
          'The Package Name is the CommonJS compatible module name for the Component, used and linked from the Workspace node_modules directory. By default, package names are computed from the Component ID.',
        component: <PackageName />,
      },
      {
        path: 'packing-components',
        title: 'Packing Components',
        description:
          'Component packages are generated during execution of the Component build pipeline and persisted as Artifacts upon component versioning.',
        component: <PackingComponents />,
      },
      {
        path: 'publishing-components-to-commonjs-registries',
        title: 'Publishing to CommonJS Registries',
        description:
          'Component packages are included in the component versions (snaps and tags). Components hosted on Bit Cloud will have their packages available to be installed by Bit, as well as by standard package managers like npm and Yarn.',
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
        description:
          "npmrc's are npm config files (used by other package manager as well). npmrc can be configured per project, per user, or globally.",
        component: <Npmrc />,
      },
    ],
  },
  // {
  //   path: 'tools',
  //   title: 'Tools',
  //   open: false,
  //   icon: 'sort',
  //   children: [
  //     {
  //       path: 'webpack',
  //       title: 'Webpack',
  //       icon: 'webpack',
  //       open: false,
  //       children: [
  //         {
  //           path: 'configure-webpack',
  //           title: 'Configure Webpack',
  //           description:
  //             'Depending on the Component Development Environments configured for components, a different default Webpack config is applied on each component.',
  //           component: <ConfigureWebpck />,
  //         },
  //         {
  //           path: 'module-federation',
  //           title: 'Module Federation',
  //           component: <ConfigureWebpck />,
  //         },
  //       ],
  //     },
  //     {
  //       title: 'TypeScript',
  //       path: 'typescript',
  //       icon: 'typescript',
  //       open: false,
  //       children: [
  //         {
  //           path: 'configuring-typescript',
  //           title: 'Configuring Typescript',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Babel',
  //       path: 'babel',
  //       open: false,
  //       icon: 'babel',
  //       children: [],
  //     },
  //     {
  //       title: 'Jest',
  //       path: 'jest',
  //       icon: 'Jest',
  //       open: false,
  //       children: [],
  //     },
  //     {
  //       path: 'pnpm',
  //       title: 'pnpm',
  //       icon: 'pnpm',
  //       open: false,
  //       children: [
  //         {
  //           path: 'pnpm',
  //           title: 'pnpm',
  //           description:
  //             'The pnpm aspect integrates the pnpm package manager, into Bit. This aspect can be used by the Dependency Resolver for dependency installation.',
  //           component: <Pnpm />,
  //         },
  //       ],
  //     },
  //     {
  //       path: 'yarn',
  //       open: false,
  //       title: 'Yarn',
  //       icon: 'yarn-logo',
  //       children: [
  //         {
  //           path: 'yarn',
  //           title: 'Yarn',
  //           description:
  //             'Yarn is an aspect that integrates Yarn v2 package manager into Bit. This aspect can be used by the Dependency Resolver, for dependency installation.',
  //           component: <Yarn />,
  //         },
  //       ],
  //     },
  //   ],
  // },
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
        children: [
          {
            path: 'react-overview',
            title: 'React overview',
            component: <ReactOverview />,
          },
          {
            path: 'config-react-tools',
            title: 'Configuring React tools',
            component: <ConfigReactTools />,
          },
          {
            path: 'replace-react-tools',
            title: 'Replacing React tools',
            component: <ReplacingReactTools />,
          },
        ],
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
        description:
          'Bit is built entirely with Bit. This means that even Bit itself is built in a component-driven architecture. It uses Harmony which is a component-based framework for composing extensible features into apps.',
        component: <AspectsOverview />,
      },
      {
        path: 'using-aspects',
        title: 'Using aspects',
        description:
          'Aspects can be used to extend Bit with simple configurations, to both the Scope and the Workspace. Aspects can also be composed into Harmony applications.',
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
    path: 'config',
    title: 'Config',
    icon: 'configuration',
    open: false,
    children: [
      {
        path: 'bit-config',
        title: 'Bit config',
        open: false,
        component: <BitConfig />,
      },
      {
        path: 'config-files',
        title: 'Config files',
        open: false,
        component: <ConfigFiles />,
      },
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
        // icon: 'terminal',
      },
      {
        path: 'using-bvm',
        title: 'Using BVM',
        component: <UsingBVM />,
        // icon: 'terminal',
      },
    ],
  },
];
