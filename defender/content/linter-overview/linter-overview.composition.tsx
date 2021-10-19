import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { LinterOverview } from './index';

export const BasicLinterOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <LinterOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
