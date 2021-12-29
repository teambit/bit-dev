import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { AppsOverview } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<AppsOverview />} />;

export const BasicAppsOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <AppsOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};