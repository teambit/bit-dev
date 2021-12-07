import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { EnvsApi } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<EnvsApi />} />;

export const BasicEnvsApi = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <EnvsApi />
      </MDXLayout>
    </ThemeCompositions>
  );
};