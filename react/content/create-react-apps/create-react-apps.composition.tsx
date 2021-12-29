import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { CreateReactApps } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<CreateReactApps />} />;

export const BasicCreateReactApps = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CreateReactApps />
      </MDXLayout>
    </ThemeCompositions>
  );
};