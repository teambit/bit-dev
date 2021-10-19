import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { CompilingDuringBuild } from './index';

export const BasicCompilingDuringBuild = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CompilingDuringBuild />
      </MDXLayout>
    </ThemeCompositions>
  );
};
