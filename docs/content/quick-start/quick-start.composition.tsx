import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { QuickStart } from './index';

export const BasicQuickStart = () => (
  <ThemeCompositions>
    <MDXLayout>
      <QuickStart />
    </MDXLayout>
  </ThemeCompositions>
);
