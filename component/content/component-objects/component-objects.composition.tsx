import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { ComponentObjects } from './index';

export const BasicComponentObjects = () => (
  <ThemeCompositions>
    <MDXLayout>
      <ComponentObjects />
    </MDXLayout>
  </ThemeCompositions>
);
