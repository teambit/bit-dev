import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { CompositionContext } from './index';

export const BasicCompositionContext = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CompositionContext />
      </MDXLayout>
    </ThemeCompositions>
  );
};
