import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import {
  GeneratorMain,
  GeneratorAspect,
} from '@teambit/generator';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { CommunityReactAspect } from './community-react.aspect';
// import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
const tsconfig = require('./typescript/tsconfig');

export class CommunityReactMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect, GeneratorAspect];

  static runtime = MainRuntime;

  static async provider([react, envs, generator]: [
    ReactMain,
    EnvsMain,
    GeneratorMain
  ]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */
      react.overrideTsConfig(tsconfig),
      // react.useTypescript({
      //   devConfig: [(config) => {
      //     config.setTarget('ES2017');
      //     return config;
      //   }]
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
            return config;
          }
        ]
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
            return config;
          }
        ]
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          // '@types/react': '17.0.3'
        }
      })
    ]);
    envs.registerEnv(templatesReactEnv);

    return new CommunityReactMain();
  }
}

CommunityReactAspect.addRuntime(CommunityReactMain);