import { ReactAppOptions } from '@teambit/react';
import { NetlifyOptions, Netlify } from '@teambit/cloud-providers.deployers.netlify';
// import { learnDocsPaths, gettingStartedPaths } from '@teambit/docs.ui.community-docs';
import { learnDocsPaths, gettingStartedPaths } from './routes'; // TODO This is not scalable and should be replaced with the line above once the esm-commonjs issue is fixed.

const netlify: NetlifyOptions = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  siteName: 'teambit-community-apps-bit-dev',
  team: 'teambit',
};

export const BitDevApp: ReactAppOptions = {
  name: 'bit-dev',
  entry: [require.resolve('./bit-dev.app-root')],
  deploy: Netlify.deploy(netlify),
  favicon: require.resolve('./logo.svg'),
  prerender: {
    routes: ['/', '/plugins', '/docs', ...gettingStartedPaths, ...learnDocsPaths],
  },
};

export default BitDevApp;
