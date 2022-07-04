import type { DependenciesEnv, FormatterEnv, LinterEnv, PackageEnv } from '@teambit/envs';
import type { EslintConfigTransformer } from '@teambit/eslint';
import type { FormatterContext } from '@teambit/formatter';
import type { LinterContext } from '@teambit/linter';
// import type { PackageJsonProps } from '@teambit/pkg';
import type { PrettierConfigTransformer } from '@teambit/prettier';
import type { ReactEnv } from '@teambit/react';
import type { Tester } from '@teambit/tester';

export class CommunityReactEnv implements PackageEnv, DependenciesEnv, LinterEnv, FormatterEnv {
  constructor(protected baseEnv: ReactEnv) {}

  private jestConf = require.resolve('./jest/jest.config');

  /* implement this service handler to override React's default tester */
  getTester(jestConfigPath: string, jestModulePath?: string): Tester {
    return this.baseEnv.getEsmJestTester(this.jestConf, jestModulePath);
  }

  // // enabling this causes errors like:
  // // ERROR in ./node_modules/@teambit/docs.blocks.sidebar/dist/tree/tree.js 54:25-33
  // // export 'RootNode' (imported as 'RootNode') was not found in '@teambit/base-ui.graph.tree.root-node' (possible exports: __esModule)

  //   /* implement this service handler to override the default package.json props for components */
  //   getPackageJsonProps(): PackageJsonProps {
  //     /* Return package.json props with '"type": "module"' to define components as ES modules. */
  //     return this.baseEnv.getEsmPackageJsonProps();
  //   }

  getDependencies() {
    const { baseEnv } = this;
    const { devDependencies, dependencies } = baseEnv.getDependencies();

    return {
      dependencies: {
        'core-js': dependencies['core-js'],
      },
      devDependencies,
      peers: [
        {
          name: 'react',
          supportedRange: '^16.8.0 || ^17.0.0',
          version: '^17.0.0',
        },
        {
          name: 'react-dom',
          supportedRange: '^16.8.0 || ^17.0.0',
          version: '^17.0.0',
        },
        // {
        //   name: '@testing-library/jest-dom',
        //   supportedVersion: '^5.16.2',
        //   version: '^5.16.2',
        // },
        {
          name: 'react-router-dom',
          supportedRange: '^6.0.0',
          version: '^6.0.0',
        },
        // {
        //   name: 'graphql',
        //   version: '^14.3.0',
        //   supportedRange: '^14.3.0',
        // },
        {
          name: '@apollo/client',
          version: '^3.6.9',
          supportedRange: '^3.0.0',
        },
        {
          name: 'subscriptions-transport-ws',
          version: '^0.11.0',
          supportedRange: '^0.11.0',
        },
      ],
    };
  }

  getLinter(context: LinterContext, transformers: EslintConfigTransformer[] = []) {
    return this.baseEnv.getLinter(context, [
      (config) => {
        config.setRule('no-console', ['error']);
        config.setRule('no-use-before-define', 'off'); // provided by ts-eslin/no-use-before
        config.setRule('@typescript-eslint/no-use-before-define', ['error', { typedefs: false, functions: false }]);
        config.setRule('react/jsx-props-no-spreading', 'off');
        config.setRule('react/require-default-props', 'off');
        config.setRule('arrow-body-style', 'off');
        config.setRule('prefer-arrow-callback', ['warn', { allowNamedFunctions: true }]);
        config.setRule('react/destructuring-assignment', 'off');
        config.setRule('class-methods-use-this', 'off');
        config.setRule('jsx-a11y/click-events-have-key-events', 'off');
        config.setRule('jsx-a11y/no-static-element-interactions', 'off');

        return config;
      },
      ...transformers,
    ]);
  }

  getFormatter(context: FormatterContext, transformers: PrettierConfigTransformer[] = []) {
    return this.baseEnv.getFormatter(context, [
      (config) => {
        config.setKey('tabWidth', 2);
        config.setKey('printWidth', 120);
        config.setKey('singleQuote', true);
        return config;
      },
      ...transformers,
    ]);
  }
}
