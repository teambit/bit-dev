import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { EnvTroubleshooting } from './index';

export const BasicEnvTroubleshooting = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <EnvTroubleshooting />
      </MDXLayout>
    </ThemeCompositions>
  );
};
