import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
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
