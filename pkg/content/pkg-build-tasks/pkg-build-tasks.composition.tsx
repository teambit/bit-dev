import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { PkgBuildTasks } from './index';

export const BasicPkgBuildTasks = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <PkgBuildTasks />
      </MDXLayout>
    </ThemeCompositions>
  );
};
