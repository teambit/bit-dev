import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { CreateApp } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<CreateApp />} />;

export const BasicCreateApp = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CreateApp />
      </MDXLayout>
    </ThemeCompositions>
  );
};