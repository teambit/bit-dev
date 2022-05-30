import { JSONPath } from 'jsonpath-plus';
import { WebpackConfigTransformer, WebpackConfigMutator } from '@teambit/webpack';

// temporary solution until we figure out how to handle peers with multiple (cjs and esm) entry points

// select all rules using "expose-loader" and applying on "graphql"
const exposeGraphqlRulePath =
  '$.module.rules..[?(@ && @.loader && @.loader.includes("expose-loader") && typeof @.test === "string" && @.test.includes("/graphql/"))]';

export const replaceGqlExposeTransformer: WebpackConfigTransformer = (config: WebpackConfigMutator) => {
  const relevantLoaders = JSONPath<{ test: string }[]>({ json: config.raw, path: exposeGraphqlRulePath });

  relevantLoaders.forEach((loader) => {
    // eslint-disable-next-line no-param-reassign
    loader.test = require.resolve('graphql');
  });

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
