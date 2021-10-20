import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
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
