import React from 'react';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { PreviewRuntime } from '@teambit/preview';
import { CloudProvider } from '@teambit/cloud.cloud-provider';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import type { MDXProviderComponents } from '@teambit/mdx.ui.mdx-layout';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { NavigationProvider, Link, LinkProps } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { CommunityMdxAspect } from './community-mdx.aspect';

const mdxComponents: MDXProviderComponents = {
  // @ts-ignore check with kutner
  wrapper: 'div',
  a: (props: LinkProps) => <Link {...props} external />,
};

export class CommunityMdxPreview {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const communityMdxPreview = new CommunityMdxPreview();
    react.registerProvider([
      ({ children, ...rest }) => (
        <MDXLayout {...rest} components={mdxComponents}>
          {children}
        </MDXLayout>
      ),
      ({ children, ...rest }) => (
        <NavigationProvider {...rest} implementation={reactRouterAdapter}>
          {children}
        </NavigationProvider>
      ),
      (props) => {
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
      CloudProvider
    ]);

    return communityMdxPreview;
  }
}

CommunityMdxAspect.addRuntime(CommunityMdxPreview);
