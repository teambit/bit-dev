import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { IndexJson } from './index';

export const BasicIndexJson = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <IndexJson />
      </MDXLayout>
    </ThemeCompositions>
  );
};
