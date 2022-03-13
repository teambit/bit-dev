import { ReactAppOptions } from "@teambit/react";
import {
  NetlifyOptions,
  Netlify,
} from "@teambit/cloud-providers.deployers.netlify";
import { faviconWebpackTransformer } from "./webpack-favicon";

const netlify: NetlifyOptions = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  siteName: "teambit-community-apps-bit-dev",
  team: "teambit",
};

export const BitDevApp: ReactAppOptions = {
  name: "bit-dev",
  entry: [require.resolve("./bit-dev.app-root")],
  deploy: Netlify.deploy(netlify),
  webpackTransformers: [faviconWebpackTransformer],
  // prerender: {
  //   routes: ['/', '/plugins', '/docs'],
  // },
};

export default BitDevApp;
