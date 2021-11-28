import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { UsingBuildTask } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<UsingBuildTask />} />;

export const BasicUsingBuildTask = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <UsingBuildTask />
      </MDXLayout>
    </ThemeCompositions>
  );
};