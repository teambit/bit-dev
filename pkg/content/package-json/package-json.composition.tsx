import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { PackageJson } from './index';

export const BasicPackageJson = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <PackageJson />
      </MDXLayout>
    </ThemeCompositions>
  );
};
