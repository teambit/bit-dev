import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { ConfigReactTools } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<ConfigReactTools />} />;

export const BasicConfigReactTools = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ConfigReactTools />
      </MDXLayout>
    </ThemeCompositions>
  );
};