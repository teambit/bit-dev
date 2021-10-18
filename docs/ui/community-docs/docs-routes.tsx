import React from 'react';
import loadable from '@loadable/component';
import { DocsRoute } from '@teambit/docs.ui.docs';

/* Quick Start */
const QuickStart = loadable(() => import('@teambit/docs.content.quick-start'));

/* Getting Started */

const InstallingBit = loadable(
  () => import('@teambit/docs.content.getting-started.installing-bit')
);
const CreateComponents = loadable(
  () =>
    import(
      '@teambit/community.content.getting-started.composing.create-components'
    )
);
const DevEnvs = loadable(
  () => import('@teambit/docs.content.getting-started.dev-envs')
);
const UseDependencies = loadable(
  () => import('@teambit/docs.content.getting-started.use-dependencies')
);
const CreateWorkspace = loadable(
  () => import('@teambit/docs.content.getting-started.create-workspace')
);

/* Workspace */

const Bitmap = loadable(() => import('@teambit/workspace.content.bitmap'));
const ScopeOverview = loadable(
  () => import('@teambit/scope.content.scope-overview')
);

/* Preview */

const PreviewOverview = loadable(
  () => import('@teambit/preview.content.preview-overview')
);
const PreviewDuringBuild = loadable(
  () => import('@teambit/preview.content.preview-during-build')
);
const PreviewDuringDevelopment = loadable(
  () => import('@teambit/preview.content.preview-during-development')
);

const RegisterCustomPreview = loadable(
  () => import('@teambit/preview.content.register-custom-preview')
);

/* Tester */
const TesterOverview = loadable(
  () => import('@teambit/defender.content.tester-overview')
);

const TestingDuringDevelopment = loadable(
  () => import('@teambit/defender.content.testing-during-development')
);

const TestingDuringBuild = loadable(
  () => import('@teambit/defender.content.testing-during-build')
);

const ConfigureEnvWithTester = loadable(
  () => import('@teambit/defender.content.configure-env-with-tester')
);

const ImplementTester = loadable(
  () => import('@teambit/defender.content.implement-tester')
);

/* Linter */

const LinterOverview = loadable(
  () => import('@teambit/defender.content.linter-overview')
);

const LintingDuringDevelopment = loadable(
  () => import('@teambit/defender.content.linting-during-development')
);

const LintingDuringBuild = loadable(
  () => import('@teambit/defender.content.linting-during-build')
);

const ConfigureEnvWithLinter = loadable(
  () => import('@teambit/defender.content.configure-env-with-linter')
);

const ImplementLinter = loadable(
  () => import('@teambit/defender.content.implement-linter')
);

/* Formatter */

const FormatterOverview = loadable(
  () => import('@teambit/defender.content.formatter-overview')
);

const FormattingDuringDevelopment = loadable(
  () => import('@teambit/defender.content.formatting-during-development')
);

const FormattingDuringBuild = loadable(
  () => import('@teambit/defender.content.formatting-during-build')
);

const ConfigureEnvWithFormatter = loadable(
  () => import('@teambit/defender.content.configure-env-with-formatter')
);

const ImplementFormatter = loadable(
  () => import('@teambit/defender.content.implement-formatter')
);

/* Compiler  */

const CompilerOverview = loadable(
  () => import('@teambit/compilation.content.compiler-overview')
);

const CompilingDuringDevelopment = loadable(
  () => import('@teambit/compilation.content.compiling-during-development')
);

const CompilingDuringBuild = loadable(
  () => import('@teambit/compilation.content.compiling-during-build')
);

const ConfigureEnvWithCompiler = loadable(
  () => import('@teambit/compilation.content.configure-env-with-compiler')
);

const ImplementCompiler = loadable(
  () => import('@teambit/compilation.content.implement-compiler')
);

const MultiCompiler = loadable(
  () => import('@teambit/compilation.content.multi-compiler')
);

const ConfigureWebpck = loadable(
  () => import('@teambit/webpack.content.configure-webpack')
);

const CliReference = loadable(
  () => import('@teambit/harmony.content.cli-reference')
);

/* Env services */

const DevServicesOverview = loadable(
  () => import('@teambit/envs.content.dev-services-overview')
);

export const docsRoutes: DocsRoute[] = [
  {
    path: 'quick-start',
    icon: 'lightning',
    title: 'Quick Start',
    component: <QuickStart />,
  },
  {
    path: 'getting-started',
    title: 'Getting Started',
    icon: 'Ripple_play',
    children: [
      {
        path: 'installing-bit',
        title: 'Installing Bit',
        component: <InstallingBit />,
      },
      {
        path: 'create-new-workspace',
        title: 'Create a new Workspace',
        component: <CreateWorkspace />,
      },
      {
        path: 'composing',
        title: 'Composing',
        collapsed: true,
        children: [
          {
            path: 'creating-components',
            title: 'Creating Components',
            component: <CreateComponents />,
          },
          {
            path: 'dev-environments',
            title: 'Dev environments',
            component: <DevEnvs />,
          },
          {
            path: 'use-dependencies',
            title: 'Use dependencies',
            component: <UseDependencies />,
          },
        ],
      },
    ],
  },
  {
    path: 'workspace',
    title: 'Workspace',
    icon: 'workspace',
    children: [
      {
        path: 'bitmap',
        title: 'bitmap',
        component: <Bitmap />,
      },
    ],
  },
  {
    path: 'scope',
    title: 'Scope',
    icon: 'dependencies',
    children: [
      {
        path: 'overview',
        title: 'Overview',
        component: <ScopeOverview />,
      },
    ],
  },
  {
    path: 'dev-services',
    title: 'Dev Services',
    icon: 'compCI',
    collapsed: true,
    children: [
      {
        path: 'dev-services-overview',
        title: 'Dev Services Overview',
        component: <DevServicesOverview />,
      },
      {
        path: 'preview',
        title: 'Preview',
        collapsed: true,
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
        path: 'tester',
        title: 'Tester',
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
        path: 'compiler',
        title: 'Compiler',
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
            path: 'multi-compiler',
            title: 'Multi-Compiler',
            component: <MultiCompiler />,
          },
        ],
      },
      {
        path: 'linter',
        title: 'Linter',
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
    path: 'bit-integrations',
    title: 'Bit Integrations',
    icon: 'sort',
    children: [
      {
        path: 'webpack',
        title: 'Webpack',
        children: [
          {
            path: 'configure-webpack',
            title: 'Configure Webpack',
            component: <ConfigureWebpck />,
          },
        ],
      },
    ],
  },
  {
    path: 'platforms',
    title: 'Platforms',
    icon: 'Internal',
    children: [],
  },
  {
    path: 'extending-bit',
    icon: 'Extension',
    title: 'Extending Bit',
    children: [],
  },
  {
    path: 'reference',
    icon: 'Ripple_list',
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
