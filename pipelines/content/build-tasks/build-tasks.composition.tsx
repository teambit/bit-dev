import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { BuildTasks } from './index';

export const BasicBuildTasks = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BuildTasks />
      </MDXLayout>
    </ThemeCompositions>
  );
};
