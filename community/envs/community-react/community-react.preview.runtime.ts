import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
// import { GqlServerProvider } from '@teambit/base-ui.hooks.use-graphql-light';
import { MemoryRouter } from 'react-router-dom';
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { CommunityReactConfig, CommunityReactAspect } from './community-react.aspect';

export class CommunityReactPreview {
  constructor(private config: CommunityReactConfig) {}

  /**
   * this is how other aspects can now access the configured port.
   */
  getBaseUrl() {
    return this.config.baseUrl;
  }

  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview], config: CommunityReactConfig) {
    const communityReactPreview = new CommunityReactPreview(config);
    react.registerProvider([
      // ({ children }: { children?: ReactNode }) => {
      //   // creating a new instance of the Bit graphQL provider with my URL.
      //   return (
      //     // <GqlServerProvider value={config.baseUrl}>
      //       {children}
      //     // </GqlServerProvider>
      //   );
      // },
      MemoryRouter,
      // ThemeCompositions,
    ]);

    return communityReactPreview;
  }
}

CommunityReactAspect.addRuntime(CommunityReactPreview);
