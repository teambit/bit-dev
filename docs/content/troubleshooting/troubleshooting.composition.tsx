import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Troubleshooting } from './index';

export const BasicTroubleshooting = () => (
  <ThemeCompositions>
    <MDXLayout>
      <Troubleshooting />
    </MDXLayout>
  </ThemeCompositions>
);
