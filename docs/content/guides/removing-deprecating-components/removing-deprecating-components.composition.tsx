import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { RemovingDeprecatingComponents } from './index';

export const BasicRemovingDeprecatingComponents = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <RemovingDeprecatingComponents />
      </MDXLayout>
    </ThemeCompositions>
  );
};
