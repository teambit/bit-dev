import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';

import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';

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
      (props: { children: React.ReactNode }) => <NavigationProvider {...props} implementation={reactRouterAdapter} />,
      MemoryRouter,
      ThemeSwitcher,
    ]);

    return communityReactPreview;
  }
}

CommunityReactAspect.addRuntime(CommunityReactPreview);
