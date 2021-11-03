import React from 'react';
import type { ComponentCardProps } from '@teambit/explorer.ui.gallery.component-card';
import styles from './plugins.module.scss';

const staticBrandsBaseUrl = 'https://static.bit.dev/brands/';
const staticEnvBaseUrl = 'https://static.bit.dev/extensions-icons/';

function ComponentCardPreview({ src }: { src: string }) {
  return (
    <div className={styles.componentCardPreview}>
      <img src={src} alt="" />
    </div>
  );
}

export const devEnvsMock: ComponentCardProps[] = [
  {
    id: 'teambit.react/react',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-react.svg`} />,
  },
  {
    id: 'teambit.react/react-native',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-react.svg`} />,
  },
  {
    id: 'teambit.harmony/node',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-nodejs.svg`} />,
  },
  {
    id: 'teambit.angular/angular',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-angular.svg`} />,
  },
  {
    id: 'teambit.web-components/lit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-lit.svg`} />,
  },
  {
    id: 'teambit.html/html',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}html5.svg`} />,
  },
  {
    id: 'teambit.harmony/aspect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticEnvBaseUrl}default.svg`} />,
  },
];

export const compilingMock: ComponentCardProps[] = [
  {
    id: 'teambit.typescript/typescript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-typescript.svg`} />,
  },
  {
    id: 'teambit.compilation/babel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-babbel.svg`} />,
  },
  {
    id: 'teambit.mdx/mdx',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-mdx.svg`} />,
  },
];

export const testingMock: ComponentCardProps[] = [
  {
    id: 'teambit.defender/jest',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-jest.svg`} />,
  },
  {
    id: 'teambit.defender/mocha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-mocha.svg`} />,
  },
];

export const lintingFormatingMock: ComponentCardProps[] = [
  {
    id: 'teambit.defender/eslint',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-eslint.svg`} />,
  },
  {
    id: 'teambit.defender/prettier',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-prettier.svg`} />,
  },
];

export const appsMock: ComponentCardProps[] = [
  {
    id: 'teambit.application/netlify',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}netlify.svg`} />,
  },
  {
    id: 'teambit.apps/nextjs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-next.svg`} />,
  },
  {
    id: 'teambit.apps/gatsby',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-gatsby.svg`} />,
  },
  {
    id: 'teambit.apps/docusaurus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-docusaurus.svg`} />,
  },
];
