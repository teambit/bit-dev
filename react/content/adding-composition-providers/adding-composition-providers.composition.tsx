import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { AddingCompositionProviders } from './index';

export const BasicAddingCompositionProviders = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <AddingCompositionProviders />
      </MDXLayout>
    </ThemeCompositions>
  );
};
