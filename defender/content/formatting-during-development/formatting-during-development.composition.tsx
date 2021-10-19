import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { FormattingDuringDevelopment } from './index';

export const BasicFormattingDuringDevelopment = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <FormattingDuringDevelopment />
      </MDXLayout>
    </ThemeCompositions>
  );
};
