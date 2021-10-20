import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { TesterOverview } from './index';

export const BasicTesterOverview = () => (
  <ThemeCompositions>
    <MDXLayout>
      <TesterOverview />
    </MDXLayout>
  </ThemeCompositions>
);
