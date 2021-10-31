import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { DependenciesOverview } from './index';

export const BasicDependenciesOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DependenciesOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
