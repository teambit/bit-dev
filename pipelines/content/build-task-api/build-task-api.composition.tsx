import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
// import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { BuildTaskApi } from './index';

// export const DisplayedInBitDev = () => <BitDevMock component={<BuildTaskApi />} />;

export const BasicBuildTaskApi = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BuildTaskApi />
      </MDXLayout>
    </ThemeCompositions>
  );
};
