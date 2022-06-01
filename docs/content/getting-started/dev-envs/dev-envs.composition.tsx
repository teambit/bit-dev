import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CloudProvider } from '@teambit/cloud.cloud-provider';
import { DevEnvs } from './index';

export const Content = () => (
  <ThemeCompositions>
    <MDXLayout>
      <CloudProvider>
        <DevEnvs />
      </CloudProvider>
    </MDXLayout>
  </ThemeCompositions>
);
