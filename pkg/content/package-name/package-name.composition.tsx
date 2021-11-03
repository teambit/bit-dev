import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { PackageName } from './index';

export const BasicPackageName = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <PackageName />
      </MDXLayout>
    </ThemeCompositions>
  );
};
