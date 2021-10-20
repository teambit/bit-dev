import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { DocTemplates } from './index';

export const BasicDocTemplates = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DocTemplates />
      </MDXLayout>
    </ThemeCompositions>
  );
};
