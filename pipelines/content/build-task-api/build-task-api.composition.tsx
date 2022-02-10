import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BuildTaskApi } from './index';

export const BasicBuildTaskApi = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BuildTaskApi />
      </MDXLayout>
    </ThemeCompositions>
  );
};
