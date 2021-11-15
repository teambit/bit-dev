import React from 'react';
import { BasicHeader } from '@teambit/community.ui.header.header/dist/header.composition';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Docs } from '@teambit/docs.ui.docs';
import { ExtendingReact } from './index';

const DocsApp = () => {
  const routes = [
    {
      path: '',
      title: '',
      component: <ExtendingReact />,
    },
  ];
  return <Docs baseUrl="" routes={routes} />;
};

export const DisplayedInBitDev = () => {
  return (
    <ThemeCompositions>
      <BasicHeader />
      <WideColumn>
        <DocsApp />
      </WideColumn>
    </ThemeCompositions>
  );
};
