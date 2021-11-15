import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { Header } from '@teambit/community.ui.header.header';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { ExtendingReact } from './index';

export const BasicExtendingReact = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ExtendingReact />
      </MDXLayout>
    </ThemeCompositions>
  );
};

export const ExtendingReactInDocsApp = () => {
  return (
    <ThemeCompositions>
      <Header />
      <CommunityDocs routes={[]}>
        <ExtendingReact />
      </CommunityDocs>
    </ThemeCompositions>
  );
};
