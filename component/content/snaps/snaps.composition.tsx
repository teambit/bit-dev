import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Snaps } from './index';

export const BasicSnaps = () => (
  <ThemeCompositions>
    <MDXLayout>
      <Snaps />
    </MDXLayout>
  </ThemeCompositions>
);
