import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { DevServices } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<DevServices />} />;

export const BasicDevServices = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DevServices />
      </MDXLayout>
    </ThemeCompositions>
  );
};