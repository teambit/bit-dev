import { WebpackConfigTransformer, WebpackConfigMutator } from '@teambit/webpack';

export const addGqlAliasTransformer: WebpackConfigTransformer = (config: WebpackConfigMutator) => {
  const aliases = {
    '@apollo/client$': require.resolve('@apollo/client'),
    '@apollo/client/utilities$': require.resolve('@apollo/client/utilities'),
    '@apollo/client/link/ws$': require.resolve('@apollo/client/link/ws'),
  };

  // eslint-disable-next-line no-param-reassign
  config.raw.resolve = config.raw.resolve || {};

  // prepend aliases (so they will take effect before the built-in aliases)
  // eslint-disable-next-line no-param-reassign
  config.raw.resolve.alias = { ...aliases, ...config.raw.resolve?.alias };

  return config;
};
