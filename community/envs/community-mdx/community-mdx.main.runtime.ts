import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactEnv, ReactMain } from '@teambit/react';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { MDXAspect, MDXMain } from '@teambit/mdx';

import { CommunityMdxAspect, CommunityMdxConfig } from './community-mdx.aspect';
import { bitDevDocs } from './templates/bitdev-docs';

export class CommunityMdxMain {
  constructor(readonly env: ReactEnv) {}

  static slots = [];

  static dependencies = [EnvsAspect, MDXAspect, GeneratorAspect, ReactAspect];

  static runtime = MainRuntime;

  static defaultConfig: CommunityMdxConfig = {
    extensions: ['.md', '.mdx'],
  };

  static async provider([envs, mdxMain, generator, react]: [EnvsMain, MDXMain, GeneratorMain, ReactMain]) {
    const { devDependencies, dependencies }: any = mdxMain.mdxEnv.getDependencies();
    const reactDeps = react.env.getDependencies();
    const devDeps = {
      ...reactDeps.devDependencies,
      ...devDependencies,
    };
    const deps = {
      ...dependencies,
      '@teambit/mdx.ui.mdx-scope-context': '0.0.368',
      '@mdx-js/react': '1.6.22',
    };

    const communityMdxEnv = envs.compose(mdxMain.mdxEnv, [
      envs.override({
        getDependencies: () => {
          return {
            dependencies: deps,
            devDependencies: devDeps,
            peers: [
              {
                name: 'react',
                supportedRange: '^16.8.0 || ^17.0.0',
                version: '^17.0.0',
              },
              {
                name: 'react-dom',
                supportedRange: '^16.8.0 || ^17.0.0',
                version: '^17.0.0',
              },
              // {
              //   name: '@testing-library/jest-dom',
              //   supportedVersion: '^5.16.2',
              //   version: '^5.16.2',
              // },
              {
                name: 'react-router-dom',
                supportedRange: '^6.0.0',
                version: '^6.0.0',
              },
              {
                name: 'graphql',
                version: '^14.3.0',
                supportedRange: '^14.3.0',
              },
              {
                name: '@apollo/client',
                version: '^3.5.10',
                supportedRange: '^3.5.10',
              },
              {
                name: 'subscriptions-transport-ws',
                version: '^0.11.0',
                supportedRange: '^0.11.0',
              },
            ],
          };
        },
      }),
    ]) as ReactEnv;

    envs.registerEnv(communityMdxEnv);
    generator.registerComponentTemplate([bitDevDocs]);

    return new CommunityMdxMain(communityMdxEnv);
  }
}

CommunityMdxAspect.addRuntime(CommunityMdxMain);
