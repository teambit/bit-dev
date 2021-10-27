import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { InstallingDependencies } from './index';

export const BasicInstallingDependencies = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <InstallingDependencies />
      </MDXLayout>
    </ThemeCompositions>
  );
};
