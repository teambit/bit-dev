import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { ContributingDocs } from './index';

export const BasicContributingDocs = () => (
  <div style={{ marginLeft: 300, marginRight: 300 }}>
    <ThemeCompositions>
      <MDXLayout>
        <ContributingDocs />
      </MDXLayout>
    </ThemeCompositions>
  </div>
);
