import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/ui.mdx-layout';
import { RegisterCustomPreview } from './index';

<ThemeCompositions>
  <MDXLayout>
    <RegisterCustomPreview />
  </MDXLayout>
</ThemeCompositions>;

export const BasicRegisterCustomPreview = () => <RegisterCustomPreview />;
