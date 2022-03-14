import React, { ReactNode } from 'react';
import { Header } from '@teambit/community.ui.header.header';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Docs } from '@teambit/docs.ui.docs';

export type BitDevMockProps = {
  component: ReactNode;
};

export const BitDevMock = ({ component }: BitDevMockProps) => {
  const routes = [
    {
      path: '',
      title: '',
      component,
    },
  ];
  return (
    <>
      <Header />
      <WideColumn>
        <Docs contents={[{ routes }]} />
      </WideColumn>
    </>
  );
};
