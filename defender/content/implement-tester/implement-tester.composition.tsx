import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { ImplementTester } from './index';

export const BasicImplementTester = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ImplementTester />
      </MDXLayout>
    </ThemeCompositions>
  );
};
