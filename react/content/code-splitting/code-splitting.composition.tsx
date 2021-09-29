import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CodeSplitting } from './index';

export const BasicCodeSplitting = () => (
  <ThemeCompositions>
    <MDXLayout>
      <CodeSplitting />
    </MDXLayout>
  </ThemeCompositions>
);
