import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ComponentConfig } from './index';

export const BasicComponentConfig = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ComponentConfig />
      </MDXLayout>
    </ThemeCompositions>
  );
};
