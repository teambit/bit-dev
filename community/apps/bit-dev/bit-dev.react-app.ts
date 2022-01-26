import { ReactAppOptions } from '@teambit/react';
import { NetlifyOptions, Netlify } from '@teambit/apps.netlify';

const netlify: NetlifyOptions = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  siteName: 'teambit-community-apps-bit-dev',
  team: 'yona',
};

export const BitDevApp: ReactAppOptions = {
  name: 'bit-dev',
  entry: [require.resolve('./bit-dev.app-root')],
  deploy: Netlify.deploy(netlify),
  prerender: {
    routes: ['/', '/plugins', '/docs'],
  },
};

export default BitDevApp;
