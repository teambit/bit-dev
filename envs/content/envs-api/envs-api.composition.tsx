import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { EnvsApi } from './index';

export const BasicEnvsApi = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <EnvsApi />
      </MDXLayout>
    </ThemeCompositions>
  );
};
