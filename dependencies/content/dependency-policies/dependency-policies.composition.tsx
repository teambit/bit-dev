import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { DependencyPolicies } from './index';

export const BasicDependencyPolicies = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DependencyPolicies />
      </MDXLayout>
    </ThemeCompositions>
  );
};
