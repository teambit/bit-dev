import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { PackingComponents } from './index';

export const BasicPackingComponents = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <PackingComponents />
      </MDXLayout>
    </ThemeCompositions>
  );
};
