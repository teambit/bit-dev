import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BuildArtifactsApi } from './index';

export const BasicBuildArtifactsApi = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BuildArtifactsApi />
      </MDXLayout>
    </ThemeCompositions>
  );
};
