import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Mdx } from './index';

export const BasicMdx = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <Mdx />
      </MDXLayout>
    </ThemeCompositions>
  );
};
