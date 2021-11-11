import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { UsageAnalytics } from './index';

export const BasicCliReference = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <UsageAnalytics />
      </MDXLayout>
    </ThemeCompositions>
  );
};
