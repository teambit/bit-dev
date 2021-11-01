import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ExportingComponents } from './index';

export const BasicExportingComponents = () => (
  <ThemeCompositions>
    <MDXLayout>
      <ExportingComponents />
    </MDXLayout>
  </ThemeCompositions>
);
