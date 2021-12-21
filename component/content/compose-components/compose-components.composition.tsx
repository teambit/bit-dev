import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { ComposeComponents } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<ComposeComponents />} />;

export const BasicComposeComponents = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ComposeComponents />
      </MDXLayout>
    </ThemeCompositions>
  );
};