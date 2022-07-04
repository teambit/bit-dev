import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain, ReactEnv } from '@teambit/react';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { CommunityReactAspect } from './community-react.aspect';
import { myReactTemplate } from './templates/my-react-template';
import { myEntityTemplate } from './templates/my-entity-template';
import { transformTsConfig } from './typescript/transform-tsconfig';
import { CommunityReactEnv } from './community-react.env';

export class CommunityReactMain {
  constructor(readonly communityReactEnv: ReactEnv) {}

  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect, GeneratorAspect];

  static runtime = MainRuntime;

  static async provider([react, envs, generator]: [ReactMain, EnvsMain, GeneratorMain]) {
    const communityReactEnv = envs.merge(new CommunityReactEnv(react.reactEnv), react.reactEnv);

    const templatesReactEnv = envs.compose(communityReactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest.
       * Your config gets merged with the defaults.
       */
      react.useTypescript({
        devConfig: [transformTsConfig],
        buildConfig: [transformTsConfig],
      }),
    ]) as ReactEnv;

    envs.registerEnv(templatesReactEnv);

    generator.registerComponentTemplate([myReactTemplate, myEntityTemplate]);

    return new CommunityReactMain(templatesReactEnv);
  }
}

CommunityReactAspect.addRuntime(CommunityReactMain);
