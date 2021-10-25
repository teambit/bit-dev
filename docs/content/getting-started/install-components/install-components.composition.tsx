import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { InstallComponents } from './index';

export const BasicCreateWorkspace = () => (
  <ThemeCompositions>
    <MDXLayout>
      <InstallComponents />
    </MDXLayout>
  </ThemeCompositions>
);
