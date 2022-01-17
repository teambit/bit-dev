import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
// import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { AddingCompositionProviders } from './index';

// export const DisplayedInBitDev = () => <BitDevMock component={<AddingCompositionProviders />} />;

export const BasicAddingCompositionProviders = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <AddingCompositionProviders />
      </MDXLayout>
    </ThemeCompositions>
  );
};
