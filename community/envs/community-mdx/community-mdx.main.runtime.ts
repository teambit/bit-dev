import { MainRuntime } from '@teambit/cli';
import type { TsConfigTransformer } from '@teambit/typescript';
import type { TypescriptConfigMutator } from '@teambit/typescript.modules.ts-config-mutator';
import { BabelAspect, BabelMain } from '@teambit/babel';
import { CompilerAspect, CompilerMain } from '@teambit/compiler';
import MultiCompilerAspect, { MultiCompilerMain } from '@teambit/multi-compiler';
import { ReactAspect, ReactMain, ReactEnv } from '@teambit/react';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { MDXAspect, MDXMain } from '@teambit/mdx';
import DocsAspect, { DocsMain } from '@teambit/docs';
import { CommunityReactAspect, CommunityReactMain } from '@teambit/community.envs.community-react';
import { DependencyResolverAspect, DependencyResolverMain } from '@teambit/dependency-resolver';

import { babelConfig } from './babel/babel.config';
import { CommunityMdxAspect, CommunityMdxConfig } from './community-mdx.aspect';
import { MDXDependencyDetector } from './mdx.detector';
import { bitDevDocs } from './templates/bitdev-docs';

// TODO:
// - move templates from community react to here
// - base off base react / base mdx env?

export class CommunityMdxMain {
  static slots = [];

  static dependencies = [
    EnvsAspect,
    ReactAspect,
    CommunityReactAspect,
    MDXAspect,
    GeneratorAspect,
    MultiCompilerAspect,
    CompilerAspect,
    BabelAspect,
    DocsAspect,
    DependencyResolverAspect,
  ];

  static runtime = MainRuntime;

  static defaultConfig: CommunityMdxConfig = {
    extensions: ['.md', '.mdx'],
  };

  static async provider(
    [envs, react, communityReact, mdx, generator, multiCompiler, compiler, babel, docs, depResolver]: [
      EnvsMain,
      ReactMain,
      CommunityReactMain,
      MDXMain,
      GeneratorMain,
      MultiCompilerMain,
      CompilerMain,
      BabelMain,
      DocsMain,
      DependencyResolverMain
    ],
    config: CommunityMdxConfig
  ) {
    const tsTransformer: TsConfigTransformer = (tsconfig: TypescriptConfigMutator) => {
      // set the shouldCopyNonSupportedFiles to false since we don't want ts to copy the .mdx file to the dist folder (it will conflict with the .mdx.js file created by the mdx compiler)
      tsconfig.setCompileJs(false).setCompileJsx(false).setShouldCopyNonSupportedFiles(false);
      return tsconfig;
    };
    const tsCompiler = react.env.getCompiler([tsTransformer]);
    const mdxCompiler = multiCompiler.createCompiler(
      [
        // set the shouldCopyNonSupportedFiles to false since we don't want babel to copy the .mdx file to the dist folder (it will conflict with the .mdx.js file created by the mdx compiler)
        babel.createCompiler({ babelTransformOptions: babelConfig, shouldCopyNonSupportedFiles: false }),
        mdx.createCompiler({ ignoredPatterns: docs.getPatterns(), babelTransformOptions: babelConfig }),
        tsCompiler,
      ],
      {}
    );

    // TODO - compose mdx.env, once it is public -> (https://github.com/teambit/bit/pull/5389)
    const communityMdxEnv = envs.compose(react.env, [
      react.overrideCompiler(mdxCompiler),
      react.overrideDependencies({
        dependencies: {
          '@teambit/mdx.ui.mdx-scope-context': '^0.0.486',
          '@mdx-js/react': '1.6.22',
        },
        peers: [
          {
            name: 'react-router-dom',
            supportedRange: '^5.0.0',
            version: '^5.0.0',
          },
        ],
      }),
      react.overrideCompilerTasks([compiler.createTask('MDXCompiler', mdxCompiler)]),
      // TODO
      // envs.override({
      //   getPreviewConfig: () => {
      //     return {
      //       strategyName: 'component',
      //       splitComponentBundle: true,
      //     };
      //   },
      // }),
    ]) as ReactEnv;

    envs.registerEnv(communityMdxEnv);

    // TODO - check if this is needed
    depResolver.registerDetector(new MDXDependencyDetector(config.extensions));
    generator.registerComponentTemplate([bitDevDocs]);

    return new CommunityMdxMain();
  }
}

CommunityMdxAspect.addRuntime(CommunityMdxMain);
