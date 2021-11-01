import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { InspectingComponents } from './index';

export const BasicInspectingComponents = () => (
  <ThemeCompositions>
    <MDXLayout>
      <InspectingComponents />
    </MDXLayout>
  </ThemeCompositions>
);
