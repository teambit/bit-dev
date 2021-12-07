import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { UsageAnalytics } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<UsageAnalytics />} />;

export const BasicUsageAnalytics = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <UsageAnalytics />
      </MDXLayout>
    </ThemeCompositions>
  );
};