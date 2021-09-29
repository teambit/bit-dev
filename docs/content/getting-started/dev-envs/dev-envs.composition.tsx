import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { DevEnvs } from './index';

export const BasicDevEnvs = () => (
  <ThemeCompositions>
    <MDXLayout>
      <DevEnvs />
    </MDXLayout>
  </ThemeCompositions>
);
