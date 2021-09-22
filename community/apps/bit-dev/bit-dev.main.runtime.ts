import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { GeneratorAspect, GeneratorMain } from '@teambit/generator';
import { BitDevAspect } from './bit-dev.aspect';
import { reactTemplate } from './react.component-template';

export class BitDevMain {
  static slots = [];
  static dependencies = [ReactAspect, GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([react, generator]: [ReactMain, GeneratorMain]) {
    generator.registerComponentTemplate([
      ...reactTemplate
    ]);
    
    react.registerReactApp({
      name: 'bit-dev',
      entry: [require.resolve('./bit-dev.app-root')]
    });
    return new BitDevMain();
  }
}

BitDevAspect.addRuntime(BitDevMain);
