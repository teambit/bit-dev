import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ThinkingInComponents } from './index';

export const BasicThinkingInComponents = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ThinkingInComponents />
      </MDXLayout>
    </ThemeCompositions>
  );
};
