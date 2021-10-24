import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { MountingCompositionsToDom } from './index';

export const BasicMountingCompositionsToDom = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <MountingCompositionsToDom />
      </MDXLayout>
    </ThemeCompositions>
  );
};
