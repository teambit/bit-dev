import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ConfigFiles } from './index';

export const BasicConfigFiles = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ConfigFiles />
      </MDXLayout>
    </ThemeCompositions>
  );
};
