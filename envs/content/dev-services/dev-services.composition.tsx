import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { DevServices } from './index';

export const BasicDevServices = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <DevServices />
      </MDXLayout>
    </ThemeCompositions>
  );
};
