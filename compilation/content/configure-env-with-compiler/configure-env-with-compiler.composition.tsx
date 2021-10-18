import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { ConfigureEnvWithCompiler } from './index';

export const BasicConfigureEnvWithCompiler = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ConfigureEnvWithCompiler />
      </MDXLayout>
    </ThemeCompositions>
  );
};
