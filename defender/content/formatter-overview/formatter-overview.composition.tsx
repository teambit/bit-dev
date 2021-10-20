import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { FormatterOverview } from './index';

export const BasicFormatterOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <FormatterOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
