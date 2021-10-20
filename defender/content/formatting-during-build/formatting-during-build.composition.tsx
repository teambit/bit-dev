import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { FormattingDuringBuild } from './index';

export const BasicFormattingDuringBuild = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <FormattingDuringBuild />
      </MDXLayout>
    </ThemeCompositions>
  );
};
