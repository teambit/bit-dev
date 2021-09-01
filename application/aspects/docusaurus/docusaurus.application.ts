import { AppContext, Application, DeployContext } from '@teambit/application';
import { Workspace } from '@teambit/workspace';
import { Capsule } from '@teambit/isolator';
import { BuildContext } from '@teambit/builder';
import { start, build, serve, swizzle } from '@docusaurus/core/lib';

export type DocusaurusAppOptions = {
  name: string
};

export class DocusaurusApp implements Application {
  constructor(
    private workspace: Workspace,
    readonly name = 'docusaurus-app'
  ) {}

  async run(context: AppContext): Promise<number> {
    const path = this.workspace.componentDir(context.appId);
    await start(path, {
      
    });
  }

  build(context: BuildContext, aspectId: string, capsule: Capsule): Promise<DeployContext> {
    
  }

  deploy?(context: BuildContext): Promise<void> {
    
  }
}
