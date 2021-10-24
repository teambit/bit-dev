import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CompositionsOverview } from './index';

export const BasicCompositionsOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CompositionsOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
