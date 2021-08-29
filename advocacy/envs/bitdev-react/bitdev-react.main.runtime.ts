import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { MainRuntime } from '@teambit/cli';
import { BitDevReactAspect } from './bitdev-react.aspect';

export class BitDevReactMain {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect]

  static runtime = MainRuntime;

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const BitdevReactEnv = react.compose([
      /*
        Use any of the "react.override..." transformers to
      */
    ])

    envs.registerEnv(BitdevReactEnv)

    return new BitDevReactMain(react)
  }
}

BitDevReactAspect.addRuntime(BitDevReactMain);
