import { MainRuntime } from '@teambit/cli';
import { DocusaurusAspect, DocusaurusMain } from '@teambit/application.aspects.docusaurus';
import { WebsiteAspect } from './website.aspect';

export class WebsiteMain {

  static runtime = MainRuntime;
  static dependencies = [DocusaurusAspect];

  static async provider([docusaurus]: [DocusaurusMain]) {
    docusaurus.registerDocusaurusApp({
      name: 'bit docs'
    });
    
    return new WebsiteMain();
  }
}

WebsiteAspect.addRuntime(WebsiteMain);
