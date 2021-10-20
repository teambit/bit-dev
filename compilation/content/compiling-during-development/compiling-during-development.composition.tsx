import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CompilingDuringDevelopment } from './index';

export const BasicCompilingDuringDevelopment = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <CompilingDuringDevelopment />
      </MDXLayout>
    </ThemeCompositions>
  );
};
