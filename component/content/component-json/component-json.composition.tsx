import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ComponentJson } from './index';

export const BasicComponentJson = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ComponentJson />
      </MDXLayout>
    </ThemeCompositions>
  );
};
