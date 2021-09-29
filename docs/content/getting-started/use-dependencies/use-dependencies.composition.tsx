import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { UseDependencies } from './index';

export const BasicUseDependencies = () => (
  <ThemeCompositions>
    <MDXLayout>
      <UseDependencies />
    </MDXLayout>
  </ThemeCompositions>
);
