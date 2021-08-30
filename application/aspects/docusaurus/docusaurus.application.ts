import { AppContext, Application, DeployContext } from '@teambit/application';
import { Capsule } from '@teambit/isolator';
import { BuildContext } from '@teambit/builder';

export class DocusaurusApp implements Application {
  name: string;
  run(context: AppContext): Promise<number> {
    
  }
  build(context: BuildContext, aspectId: string, capsule: Capsule): Promise<DeployContext> {
    
  }
  deploy?(context: BuildContext): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
