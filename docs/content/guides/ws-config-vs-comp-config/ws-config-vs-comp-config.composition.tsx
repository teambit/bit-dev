import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { WsConfigVsCompConfig } from './index';

export const BasicWsConfigVsCompConfig = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <WsConfigVsCompConfig />
      </MDXLayout>
    </ThemeCompositions>
  );
};
