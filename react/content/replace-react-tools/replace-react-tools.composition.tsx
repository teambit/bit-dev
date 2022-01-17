import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
// import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { ReplaceReactTools } from './index';

// export const DisplayedInBitDev = () => <BitDevMock component={<ReplaceReactTools />} />;

export const BasicReplaceReactTools = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ReplaceReactTools />
      </MDXLayout>
    </ThemeCompositions>
  );
};
