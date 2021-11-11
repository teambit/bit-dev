import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/modules.mdx-loader';
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
