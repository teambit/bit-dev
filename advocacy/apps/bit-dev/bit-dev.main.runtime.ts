import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { BitDevAspect } from './bit-dev.aspect';

export class BitDevMain {
  static slots = [];
  static dependencies = [ReactAspect];
  static runtime = MainRuntime;
  static async provider([react]: [ReactMain]) {
    react.registerReactApp({
      name: 'bit-dev',
      entry: [require.resolve('./bit-dev.app-root')]
    });
    return new BitDevMain();
  }
}
BitDevAspect.addRuntime(BitDevMain);
