import { MainRuntime } from '@teambit/cli';
import { GeneratorAspect, GeneratorMain } from '@teambit/generator';
import { ApplicationAspect, ApplicationMain } from '@teambit/application';
import { Workspace, WorkspaceAspect } from '@teambit/workspace';
import { DocusaurusAspect } from './docusaurus.aspect';
import { DocusaurusApp, DocusaurusAppOptions } from './docusaurus.application';
import { docusaurusGenerator } from './decusaurus-app.generator';

export class DocusaurusMain {
  constructor(
    private application: ApplicationMain,
    private workspace: Workspace
  ) {}

  /**
   * register a new docusaurus app into bit.
   */
  registerDocusaurusApp(opts: DocusaurusAppOptions) {
    this.application.registerApp(new DocusaurusApp(this.workspace, opts.name))
  }
  
  static dependencies = [ApplicationAspect, GeneratorAspect, WorkspaceAspect];
  static runtime = MainRuntime;

  static async provider([app, generator, workspace]: [ApplicationMain, GeneratorMain, Workspace]) {
    generator.registerComponentTemplate([docusaurusGenerator()]);
    
    return new DocusaurusMain(app, workspace);
  }
}

DocusaurusAspect.addRuntime(DocusaurusMain);
