import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { DefineAppType } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<DefineAppType />} />;

export const BasicDefineAppType = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DefineAppType />
      </MDXLayout>
    </ThemeCompositions>
  );
};