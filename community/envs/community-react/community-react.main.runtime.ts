import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain, ReactEnv } from '@teambit/react';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { CommunityReactAspect } from './community-react.aspect';
import { myReactTemplate } from './templates/my-react-template';
import { myEntityTemplate } from './templates/my-entity-template';
// import { transformTsConfig } from './typescript/transform-tsconfig';
import { CommunityReactEnv } from './community-react.env';

// import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
// const tsconfig = require('./typescript/tsconfig');

export class CommunityReactMain {
  constructor(readonly communityReactEnv: ReactEnv) {}

  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect, GeneratorAspect];

  static runtime = MainRuntime;

  static async provider([react, envs, generator]: [ReactMain, EnvsMain, GeneratorMain]) {
    const { devDependencies, dependencies }: any = react.env.getDependencies();

    const basicCommunityReact = envs.merge(new CommunityReactEnv(react.reactEnv), react.reactEnv);

    // TODO - move all this config to community-react.env.ts
    const communityReactEnv = envs.compose(basicCommunityReact, [
      envs.override({
        getPreviewConfig: () => {
          return {
            strategyName: 'component',
            splitComponentBundle: true,
          };
        },
      }),

      envs.override({
        getDependencies: () => {
          return {
            dependencies,
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
              {
                name: 'graphql',
                version: '^14.3.0',
                supportedRange: '^14.3.0',
              },
              {
                name: '@apollo/client',
                version: '^3.5.10',
                supportedRange: '^3.0.0',
              },
              {
                name: 'subscriptions-transport-ws',
                version: '^0.11.0',
                supportedRange: '^0.11.0',
              },
            ],
          };
        },
      }),

      // /**
      //  * Uncomment to override the config files for TypeScript, Webpack or Jest.
      //  * Your config gets merged with the defaults.
      //  */
      // react.useTypescript({
      //   devConfig: [transformTsConfig],
      //   buildConfig: [transformTsConfig],
      // }),

      // react.useWebpack({
      //   previewConfig: [previewConfigTransformer],
      //   devServerConfig: [devServerConfigTransformer],
      // }),

      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
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
        ],
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            config.setKey('printWidth', 120);
            config.setKey('singleQuote', true);
            return config;
          },
        ],
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      // react.overrideDependencies({
      //   devDependencies: {
      //     // '@types/react': '17.0.3'
      //   },
      // }),
    ]) as ReactEnv;

    envs.registerEnv(communityReactEnv);

    generator.registerComponentTemplate([myReactTemplate, myEntityTemplate]);

    return new CommunityReactMain(communityReactEnv);
  }
}

CommunityReactAspect.addRuntime(CommunityReactMain);
