import { ReactAppOptions } from '@teambit/react';
import { Netlify } from '@teambit/apps.netlify';

const netlify = new Netlify(process.env.NETLIFY_AUTH_TOKEN as string, 'teambit-community-apps-bit-dev', 'yona');

export const BitDevApp: ReactAppOptions = {
  name: 'bit-dev',
  entry: [require.resolve('./bit-dev.app-root')],
  deploy: netlify.deploy.bind(netlify),
  prerender: {
    routes: ['/plugins'],
  },
};

export default BitDevApp;
