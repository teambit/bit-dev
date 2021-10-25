import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ExtendingEnv } from './index';

export const BasicExtendingEnv = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ExtendingEnv />
      </MDXLayout>
    </ThemeCompositions>
  );
};
