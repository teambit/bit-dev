import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';

import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';

import { CommunityMdxAspect } from './community-mdx.aspect';

export class CommunityMdxPreview {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const communityMdxPreview = new CommunityMdxPreview();
    react.registerProvider([
      MDXLayout,
      (props: { children: React.ReactNode }) => <NavigationProvider {...props} implementation={reactRouterAdapter} />,
      MemoryRouter,
      ThemeSwitcher,
    ]);

    return communityMdxPreview;
  }
}

CommunityMdxAspect.addRuntime(CommunityMdxPreview);
