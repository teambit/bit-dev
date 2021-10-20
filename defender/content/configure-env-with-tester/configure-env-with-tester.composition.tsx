import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ConfigureEnvWithTester } from './index';

export const BasicConfigureEnvWithTester = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ConfigureEnvWithTester />
      </MDXLayout>
    </ThemeCompositions>
  );
};
