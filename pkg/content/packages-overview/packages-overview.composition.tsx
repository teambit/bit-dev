import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { PackagesOverview } from './index';

export const BasicPackagesOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <PackagesOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
