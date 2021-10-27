import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ExternalDependencies } from './index';

export const BasicExternalDependencies = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ExternalDependencies />
      </MDXLayout>
    </ThemeCompositions>
  );
};
