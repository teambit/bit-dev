import { ComponentContext } from '@teambit/generator';

export function compositionFile({ namePascalCase }: ComponentContext) {
  return `import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BitDevMock } from '@teambit/community.ui.mocks.bit-dev';
import { ${namePascalCase} } from './index';

export const DisplayedInBitDev = () => <BitDevMock component={<${namePascalCase} />} />;

export const Basic${namePascalCase} = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <${namePascalCase} />
      </MDXLayout>
    </ThemeCompositions>
  );
};`;
}
