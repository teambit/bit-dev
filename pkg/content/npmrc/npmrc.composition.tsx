import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Npmrc } from './index';

export const BasicNpmrc = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <Npmrc />
      </MDXLayout>
    </ThemeCompositions>
  );
};
