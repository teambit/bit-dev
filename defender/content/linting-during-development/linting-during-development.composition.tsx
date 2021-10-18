import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { LintingDuringDevelopment } from './index';

export const BasicLintingDuringDevelopment = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <LintingDuringDevelopment />
      </MDXLayout>
    </ThemeCompositions>
  );
};
