import { Tester } from '@teambit/tester';
import { PackageEnv, PipeServiceModifier, PipeServiceModifiersMap, CompilerEnv } from '@teambit/envs';
import { TsConfigTransformer, TypescriptMain } from '@teambit/typescript';
import { ReactEnv } from '@teambit/react';
import type { BuildTask } from '@teambit/builder';
import type { Compiler } from '@teambit/compiler';
import type { PackageJsonProps } from '@teambit/pkg';

type GetBuildPipeModifiers = PipeServiceModifiersMap & {
  tsModifier?: PipeServiceModifier;
};
export class CommunityReactEnv implements PackageEnv /* , CompilerEnv */ {
  constructor(protected baseEnv: ReactEnv) {}

  createCompiler(transformers: TsConfigTransformer[] = [], tsModule?): Compiler {
    /**
     * return React's TS compiler with the proper config.
     */
    return this.baseEnv.getTsEsmCompiler('dev', transformers, tsModule);
  }

  /* implement this service handler to override React's default compiler */
  getCompiler(): Compiler {
    return this.createCompiler();
  }

  /* implement this service handler to override React's default build pipeline */
  getBuildPipe(modifiers: GetBuildPipeModifiers = {}): BuildTask[] {
    const tsTransformers: TsConfigTransformer[] =
      (modifiers?.tsModifier?.transformers as any as TsConfigTransformer[]) || [];
    /* get a TS compilation task with the proper config. */
    const compilerTask = this.baseEnv.getEsmCompilerTask(tsTransformers, modifiers?.tsModifier?.module);

    const pipeWithoutCompiler = this.baseEnv.getBuildPipeWithoutCompiler();
    /* return a new build pipeline with the proper TS compilation task */
    return [compilerTask, ...pipeWithoutCompiler];
  }

  /* implement this service handler to override React's default tester */
  getTester(jestConfigPath: string, jestModulePath?: string): Tester {
    return this.baseEnv.getEsmJestTester(jestConfigPath, jestModulePath);
  }

  /* implement this service handler to override the default package.json props for components */
  getPackageJsonProps(): PackageJsonProps {
    /* Return package.json props with '"type": "module"' to define components as ES modules. */
    return this.baseEnv.getEsmPackageJsonProps();
  }
}
