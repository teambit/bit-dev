import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { InspectingEnv } from './index';

export const BasicInspectingEnv = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <InspectingEnv />
      </MDXLayout>
    </ThemeCompositions>
  );
};
