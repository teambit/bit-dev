import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ImportComponents } from './';

export const BasicCreateWorkspace = () => (
  <ThemeCompositions>
    <MDXLayout>
      <ImportComponents />
    </MDXLayout>
  </ThemeCompositions>
);
