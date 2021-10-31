import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { LockFiles } from './index';

export const BasicLockFiles = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <LockFiles />
      </MDXLayout>
    </ThemeCompositions>
  );
};
