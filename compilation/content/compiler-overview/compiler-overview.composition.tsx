import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CompilerOverview } from './index';

export const BasicCompilerOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <div
          style={{
            maxWidth: 860,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 50,
          }}
        >
          <CompilerOverview />
        </div>
      </MDXLayout>
    </ThemeCompositions>
  );
};
