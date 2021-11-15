import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BasicHeader } from '@teambit/community.ui.header.header/dist/header.composition';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Docs } from '@teambit/docs.ui.docs';
import { ReactOverview } from './index';

const routes = [
  {
    path: '',
    title: '',
    component: <ReactOverview />,
  },
];

const DocsApp = () => {
  return <Docs baseUrl="" routes={routes} />;
};

export const DisplayedInBitDev = () => {
  return (
    <>
      <BasicHeader />
      <WideColumn>
        <DocsApp />
      </WideColumn>
    </>
  );
};

export const BasicReactOverview = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <ReactOverview />
      </MDXLayout>
    </ThemeCompositions>
  );
};
