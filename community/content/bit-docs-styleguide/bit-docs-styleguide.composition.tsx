import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { BitDocsStyleguide } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<BitDocsStyleguide />} />;

export const BasicBitDocsStyleguide = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BitDocsStyleguide />
      </MDXLayout>
    </ThemeCompositions>
  );
};