import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CompilerOverview } from './index';

export const BasicCompilerOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CompilerOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
