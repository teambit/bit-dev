import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { WorkspaceConfiguration } from './index';

export const BasicWorkspaceConfiguration = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <WorkspaceConfiguration />
      </MDXLayout>
    </ThemeCompositions>
  );
};
