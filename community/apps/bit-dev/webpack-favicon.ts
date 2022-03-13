import FaviconWebpackPlugin from "favicons-webpack-plugin";
import {
  WebpackConfigMutator,
  WebpackConfigTransformer,
} from "@teambit/webpack";

export const faviconWebpackTransformer: WebpackConfigTransformer = (
  configMutator: WebpackConfigMutator
) => {
  configMutator.addPlugin(
    new FaviconWebpackPlugin(require.resolve("./logo.svg"))
  );
  return configMutator;
};
