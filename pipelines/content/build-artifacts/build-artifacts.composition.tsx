import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BuildArtifacts } from './index';

export const BasicBuildArtifacts = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BuildArtifacts />
      </MDXLayout>
    </ThemeCompositions>
  );
};
