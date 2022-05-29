import { WebpackConfigTransformer, WebpackConfigMutator, WebpackConfigTransformContext } from '@teambit/webpack';

/**
 * Transformation to apply for both preview and dev server
 * @param config
 * @param _context
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function commonTransformation(config: WebpackConfigMutator, _context: WebpackConfigTransformContext) {
  // Merge config with the webpack.config.js file if you choose to import a module export format config.
  // config.merge([webpackConfig]);

  // config.addModuleRule(youRuleHere);
  return config;
}

export const replaceGqlExposeTransformer: WebpackConfigTransformer = (config: WebpackConfigMutator) => {
  if (config?.raw?.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    const gqlRule = config.raw.module.rules.find((rule) => {
      // prettier-ignore

      return !!(
          (
            // @ts-ignore
            rule.loader?.includes('expose-loader') &&
            // @ts-ignore
            typeof rule.test &&
            // @ts-ignore
            typeof rule.test === 'string' &&
            // @ts-ignore
            rule.test?.includes('/graphql/')
          )
        );
    });
    if (gqlRule) {
      // @ts-ignore
      gqlRule.test = require.resolve('graphql');
    }
  }
  return config;
};
export const addGqlAliasTransformer: WebpackConfigTransformer = (config: WebpackConfigMutator) => {
  // eslint-disable-next-line no-param-reassign
  config.raw.resolve = config.raw.resolve || {};
  // eslint-disable-next-line no-param-reassign
  config.raw.resolve.alias = {
    graphql$: require.resolve('graphql'),
    ...config.raw.resolve?.alias,
  };

  return config;
};

/**
 * Transformation for the preview only
 * @param config
 * @param context
 * @returns
 */
export const previewConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};

/**
 * Transformation for the dev server only
 * @param config
 * @param context
 * @returns
 */
export const devServerConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};
