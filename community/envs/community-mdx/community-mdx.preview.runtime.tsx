import React from 'react';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
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
      MDXLayout as any, // TODO: kutner fix this type error.
      (props: { children: React.ReactNode }) => <NavigationProvider {...props} implementation={reactRouterAdapter} />,
      (props: { children: React.ReactNode }) => {
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
    ]);

    return communityMdxPreview;
  }
}

CommunityMdxAspect.addRuntime(CommunityMdxPreview);
