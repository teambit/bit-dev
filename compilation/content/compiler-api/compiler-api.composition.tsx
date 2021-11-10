import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CompilerApi } from './index';

export const BasicCompilerApi = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CompilerApi />
      </MDXLayout>
    </ThemeCompositions>
  );
};
