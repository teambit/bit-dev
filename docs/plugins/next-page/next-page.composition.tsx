import React from 'react';
import { Docs } from '@teambit/docs.ui.docs';
import { NextPagePlugin } from './next-page-plugin';

export const BasicNextPage = () => {
  return <Docs plugins={[new NextPagePlugin()]} />;
};
