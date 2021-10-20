import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CompositionFormat } from './index';

export const BasicCompositionFormat = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CompositionFormat />
      </MDXLayout>
    </ThemeCompositions>
  );
};
