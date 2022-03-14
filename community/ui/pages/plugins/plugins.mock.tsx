import React from 'react';
import type { ComponentCardProps } from '@teambit/explorer.ui.gallery.component-card';
import styles from './plugins.module.scss';

const staticBrandsBaseUrl = 'https://static.bit.dev/brands/';
const staticEnvBaseUrl = 'https://static.bit.dev/extensions-icons/';
const baseAspectsUrl = 'https://bit.dev/';

function ComponentCardPreview({ src }: { src: string }) {
  return (
    <div className={styles.componentCardPreview}>
      <img src={src} alt="" />
    </div>
  );
}

export const devEnvsMock: ComponentCardProps[] = [
  {
    id: 'teambit/react/react',
    href: `${baseAspectsUrl}teambit/react/react`,
    description: 'A Bit development environment for React Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-react.svg`} />,
  },
  {
    id: 'teambit/react/react-native',
    href: `${baseAspectsUrl}teambit/react/react-native`,
    description: 'A Bit development environment for React Native Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-react.svg`} />,
  },
  {
    id: 'teambit/harmony/node',
    href: `${baseAspectsUrl}teambit/harmony/node`,
    description: 'A Bit development environment for Node Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-nodejs.svg`} />,
  },
  {
    id: 'teambit/angular/angular',
    href: `${baseAspectsUrl}teambit/angular/angular`,
    description: 'A generic Bit development environment for Angular Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-angular.svg`} />,
  },
  {
    id: 'teambit/web-components/lit',
    href: `${baseAspectsUrl}teambit/web-components/lit`,
    description: 'A customized extension for Lit environment.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-lit.svg`} />,
  },
  {
    id: 'teambit/html/html',
    href: `${baseAspectsUrl}teambit/html/html`,
    description: 'A tools for developing framework-less components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}html5.svg`} />,
  },
  {
    id: 'teambit/harmony/aspect',
    href: `${baseAspectsUrl}teambit/harmony/aspect`,
    description: 'A component environment built for Aspects.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticEnvBaseUrl}default.svg`} />,
  },
];

export const compilingMock: ComponentCardProps[] = [
  {
    id: 'teambit/typescript/typescript',
    href: `${baseAspectsUrl}teambit/typescript/typescript`,
    description: 'Typescript compilation for Bit components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-typescript.svg`} />,
  },
  {
    id: 'teambit/compilation/babel',
    href: `${baseAspectsUrl}teambit/compilation/babel`,
    description: 'Babel compilation for Bit components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-babbel.svg`} />,
  },
  {
    id: 'teambit/mdx/mdx',
    href: `${baseAspectsUrl}teambit/mdx/mdx`,
    description:
      'A Bit-MDX integration for simple & powerful component documentation and independent content composition.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-mdx.svg`} />,
  },
];

export const testingMock: ComponentCardProps[] = [
  {
    id: 'teambit/defender/jest',
    href: `${baseAspectsUrl}teambit/defender/jest`,
    description: '',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-jest.svg`} />,
  },
  {
    id: 'teambit/defender/mocha',
    description: 'Coming Soon.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-mocha.svg`} />,
    className: styles.disableCard,
  },
  {
    id: 'teambit/defender/cypress',
    description: 'Coming Soon.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-cypress.svg`} />,
    className: styles.disableCard,
  },
];

export const lintingFormatingMock: ComponentCardProps[] = [
  {
    id: 'teambit/defender/eslint',
    href: `${baseAspectsUrl}teambit/defender/eslint`,
    description: '',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-eslint.svg`} />,
  },
  {
    id: 'teambit/defender/prettier',
    href: `${baseAspectsUrl}teambit/defender/prettier`,
    description: '',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-prettier.svg`} />,
  },
];

export const appsMock: ComponentCardProps[] = [
  {
    id: 'teambit/apps/netlify',
    href: `${baseAspectsUrl}teambit/apps/netlify`,
    description: 'Deploy App components to Netlify.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}netlify.svg`} />,
  },
  {
    id: 'teambit/cloud-providers/cloudflare',
    href: `${baseAspectsUrl}teambit/apps/cloudflare`,
    description: 'Deploy Workers components to Cloudflare.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    // preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}netlify.svg`} />,
  },
  // {
  //   id: 'teambit/apps/nextjs',
  //   description: 'Coming Soon.',
  //   envIcon: `${staticEnvBaseUrl}default.svg`,
  //   preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-next.svg`} />,
  //   className: styles.disableCard,
  // },
  // {
  //   id: 'teambit/apps/gatsby',
  //   description: 'Coming Soon.',
  //   envIcon: `${staticEnvBaseUrl}default.svg`,
  //   preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-gatsby.svg`} />,
  //   className: styles.disableCard,
  // },
  // {
  //   id: 'teambit/apps/docusaurus',
  //   description: 'Coming Soon.',
  //   envIcon: `${staticEnvBaseUrl}default.svg`,
  //   preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-docusaurus.svg`} />,
  //   className: styles.disableCard,
  // },
];
