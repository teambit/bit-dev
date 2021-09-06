import React, { ReactNode } from 'react';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
// import { GqlServerProvider } from '@teambit/base-ui.hooks.use-graphql-light';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { BitDevReactConfig, BitDevReactAspect } from './bitdev-react.aspect';

export class BitDevReactPreview {
  constructor(private config: BitDevReactConfig) {}

  /**
   * this is how other aspects can now access the configured port.
   */
  getBaseUrl() {
    return this.config.baseUrl;
  }

  static runtime: any = PreviewRuntime;

  static dependencies: any = [ReactAspect];

  static async provider([react]: [ReactPreview], config: BitDevReactConfig) {
    const bitdevReactEnv = new BitDevReactPreview(config);
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([
      // ({ children }: { children?: ReactNode }) => {
      //   // creating a new instance of the Bit graphQL provider with my URL.
      //   return (
      //     // <GqlServerProvider value={config.baseUrl}>
      //       {children}
      //     // </GqlServerProvider>
      //   );
      // },
      ThemeContext,
    ]);

    return bitdevReactEnv;
  }
}

BitDevReactAspect.addRuntime(BitDevReactPreview);
