import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { Tags } from './index';

export const BasicTags = () => (
  <ThemeCompositions>
    <MDXLayout>
      <Tags />
    </MDXLayout>
  </ThemeCompositions>
);
