/* eslint-disable no-param-reassign */
import { JSONPath } from 'jsonpath-plus';
import { WebpackConfigTransformer, WebpackConfigMutator } from '@teambit/webpack';

// current aliases do not handle internal files, these ensures they are resolved correclty.

const exposeApolloRulePath =
  '$.module.rules..[?(@ && @.loader && @.loader.includes("expose-loader") && typeof @.test === "string" && @.test.includes("/@apollo/client/"))]';
const exposeGraphqlRulePath =
  '$.module.rules..[?(@ && @.loader && @.loader.includes("expose-loader") && typeof @.test === "string" && @.test.includes("/graphql/"))]';

export const customizeExposeLoaders: WebpackConfigTransformer = (config: WebpackConfigMutator) => {
  const apolloLoaders = JSONPath<{ test: string }[]>({ json: config.raw, path: exposeApolloRulePath });
  apolloLoaders.forEach((loader) => {
    loader.test = require.resolve('@apollo/client');
  });

  const graphqlLoaders = JSONPath<{ test: string }[]>({ json: config.raw, path: exposeGraphqlRulePath });
  graphqlLoaders.forEach((loader) => {
    loader.test = require.resolve('graphql');
  });

  return config;
};

export const addCustomAliases: WebpackConfigTransformer = (config: WebpackConfigMutator) => {
  const apolloAliases = {
    '@apollo/client$': require.resolve('@apollo/client'),
    '@apollo/client/utilities$': require.resolve('@apollo/client/utilities'),
    '@apollo/client/link/ws$': require.resolve('@apollo/client/link/ws'),
  };

  const graphqlAlises = {
    graphql$: require.resolve('graphql'),
    'graphql/language/printer$': require.resolve('graphql/language/printer'),
    'graphql/utilities/getOperationAST$': require.resolve('graphql/utilities/getOperationAST'),
  };

  config.raw.resolve = config.raw.resolve || {};

  // prepend aliases (so they will take effect before the built-in aliases)
  // eslint-disable-next-line no-param-reassign
  config.raw.resolve.alias = { ...apolloAliases, ...graphqlAlises, ...config.raw.resolve?.alias };

  return config;
};
