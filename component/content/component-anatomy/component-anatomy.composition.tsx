import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ComponentAnatomy } from './index';

export const Content = () => (
  <ThemeCompositions>
    <MDXLayout>
      <ComponentAnatomy />
    </MDXLayout>
  </ThemeCompositions>
);
