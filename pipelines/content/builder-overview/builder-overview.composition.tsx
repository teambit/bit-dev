import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { BuilderOverview } from './index';

export const BasicBuilderOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <BuilderOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
