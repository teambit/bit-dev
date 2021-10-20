import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ImplementFormatter } from './index';

export const BasicImplementFormatter = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ImplementFormatter />
      </MDXLayout>
    </ThemeCompositions>
  );
};
