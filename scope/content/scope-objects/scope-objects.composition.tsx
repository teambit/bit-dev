import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { ScopeObjects } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<ScopeObjects />} />;

export const BasicScopeObjects = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ScopeObjects />
      </MDXLayout>
    </ThemeCompositions>
  );
};