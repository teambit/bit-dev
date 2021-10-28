import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { DependencyResolution } from './index';

export const BasicDependencyResolution = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DependencyResolution />
      </MDXLayout>
    </ThemeCompositions>
  );
};
