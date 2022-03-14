import React from 'react';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { CloudProvider } from '@teambit/cloud.cloud-provider';
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
      (props: any) => <NavigationProvider {...props} implementation={reactRouterAdapter} />,
      (props: any) => {
        // TODO - should only apply the providers from the current env
        // getting error because more than one env is trying to set MemoryRouter
        return (
          // @ts-ignore
          <UNSAFE_LocationContext.Provider value={null}>
            <MemoryRouter {...props} />
          </UNSAFE_LocationContext.Provider>
        );
      },
      ThemeSwitcher,
      CloudProvider,
    ]);

    return communityReactPreview;
  }
}

CommunityReactAspect.addRuntime(CommunityReactPreview);
