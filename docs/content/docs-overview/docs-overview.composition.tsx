import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { DocsOverview } from './index';

export const BasicDocsOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DocsOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
