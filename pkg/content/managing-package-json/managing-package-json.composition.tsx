import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ManagingPackageJson } from './index';

export const BasicManagingPackageJson = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ManagingPackageJson />
      </MDXLayout>
    </ThemeCompositions>
  );
};
