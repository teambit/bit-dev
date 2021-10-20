import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BuildPipelines } from './index';

export const BasicBuildPipelines = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BuildPipelines />
      </MDXLayout>
    </ThemeCompositions>
  );
};
