import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CreatingScopes } from './index';

export const Content = () => (
  <ThemeCompositions>
    <MDXLayout>
      <CreatingScopes />
    </MDXLayout>
  </ThemeCompositions>
);
