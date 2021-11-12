import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { HostingScopes } from './index';

export const BasicHostingScopes = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <HostingScopes />
      </MDXLayout>
    </ThemeCompositions>
  );
};
