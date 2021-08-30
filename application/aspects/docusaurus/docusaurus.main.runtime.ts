import { MainRuntime } from '@teambit/cli';
import { ApplicationAspect, ApplicationMain, Application } from '@teambit/application';
import { DocusaurusAspect } from './docusaurus.aspect';

export class DocusaurusMain {
  static slots = [];
  static dependencies = [ApplicationAspect];
  static runtime = MainRuntime;
  static async provider([app]: [ApplicationMain]) {
    app.registerApp()
    return new DocusaurusMain();
  }
}

DocusaurusAspect.addRuntime(DocusaurusMain);
