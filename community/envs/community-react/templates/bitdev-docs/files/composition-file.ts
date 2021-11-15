import { ComponentContext } from '@teambit/generator';

export function compositionFile({ namePascalCase }: ComponentContext) {
  return `import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { BasicHeader } from '@teambit/community.ui.header.header/dist/header.composition';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Docs } from '@teambit/docs.ui.docs';
import { ${namePascalCase} } from './index';

const routes = [
  {
    path: '',
    title: '',
    component: <${namePascalCase} />,
  },
];

const DocsApp = () => {
  const routes = [
    {
      path: '',
      title: '',
      component: <${namePascalCase} />,
    },
  ];
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
