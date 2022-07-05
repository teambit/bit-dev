import { ReactAppOptions } from "@teambit/react";
import {
  Netlify,
  NetlifyOptions,
} from "@teambit/cloud-providers.deployers.netlify";

const netlifyOptions: NetlifyOptions = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  siteName: "teambit-wiki-apps-wiki",
  team: "teambit",
};

export const WikiApp: ReactAppOptions = {
  name: "wiki",
  entry: [require.resolve("./wiki.app-root")],
  prerender: {
    routes: ["/"],
  },
  deploy: Netlify.deploy(netlifyOptions),
};

export default WikiApp;
