import React from 'react';
import type { ComponentCardProps } from '@teambit/explorer.ui.gallery.component-card';
import { ComponentCardGroup } from './component-card-group';

const staticBrandsBaseUrl = 'https://static.bit.dev/brands/';
const staticEnvBaseUrl = 'https://static.bit.dev/extensions-icons/';

function ComponentCardPreview({ src }: { src: string }) {
  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <img src={src} width="70" />
    </div>
  );
}

const mockData: ComponentCardProps[] = [
  {
    id: 'teambit.react/react',
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
    id: 'teambit.harmony/aspect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticEnvBaseUrl}default.svg`} />,
  },
  {
    id: 'teambit.harmony/aspect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum fdfd',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    //preview: <ComponentCardPreview src={`${staticEnvBaseUrl}default.svg`} />,
  },
];

export const BasicComponentCardGroup = () => <ComponentCardGroup title="My Components" components={mockData} />;
