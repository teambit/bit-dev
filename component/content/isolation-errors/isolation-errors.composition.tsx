import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { IsolationErrors } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<IsolationErrors />} />;

export const BasicIsolationErrors = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <IsolationErrors />
      </MDXLayout>
    </ThemeCompositions>
  );
};