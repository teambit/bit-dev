import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { PreviewDuringBuild } from './index';

export const BasicPreviewDuringBuild = () => (
  <ThemeCompositions>
    <MDXLayout>
      <PreviewDuringBuild />
    </MDXLayout>
  </ThemeCompositions>
);
