import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { UsingBvm } from './index';

export const BasicOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <UsingBvm />
      </MDXLayout>
    </ThemeCompositions>
  );
};
