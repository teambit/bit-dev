import { MainRuntime } from '@teambit/cli';
import type { ReactEnv } from '@teambit/react';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { MDXAspect, MDXMain } from '@teambit/mdx';

import { CommunityMdxAspect, CommunityMdxConfig } from './community-mdx.aspect';
import { bitDevDocs } from './templates/bitdev-docs';

export class CommunityMdxMain {
  constructor(readonly env: ReactEnv) {}

  static slots = [];

  static dependencies = [EnvsAspect, MDXAspect, GeneratorAspect];

  static runtime = MainRuntime;

  static defaultConfig: CommunityMdxConfig = {
    extensions: ['.md', '.mdx'],
  };

  static async provider([envs, mdxMain, generator]: [EnvsMain, MDXMain, GeneratorMain]) {
    const communityMdxEnv = envs.compose(mdxMain.mdxEnv, []) as ReactEnv;

    envs.registerEnv(communityMdxEnv);
    generator.registerComponentTemplate([bitDevDocs]);

    return new CommunityMdxMain(communityMdxEnv);
  }
}

CommunityMdxAspect.addRuntime(CommunityMdxMain);
