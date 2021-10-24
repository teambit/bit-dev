import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ComponentId } from './index';

export const BasicComponentId = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ComponentId />
      </MDXLayout>
    </ThemeCompositions>
  );
};
