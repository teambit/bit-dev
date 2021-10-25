import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { UpdateComponents } from './index';

export const BasicCreateWorkspace = () => (
  <ThemeCompositions>
    <MDXLayout>
      <UpdateComponents />
    </MDXLayout>
  </ThemeCompositions>
);
