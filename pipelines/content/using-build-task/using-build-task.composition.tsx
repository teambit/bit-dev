import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { UsingBuildTask } from './index';

export const BasicUsingBuildTask = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <UsingBuildTask />
      </MDXLayout>
    </ThemeCompositions>
  );
};
