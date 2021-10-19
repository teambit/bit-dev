import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { ConfigureEnvWithLinter } from './index';

export const BasicConfigureEnvWithLinter = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ConfigureEnvWithLinter />
      </MDXLayout>
    </ThemeCompositions>
  );
};
