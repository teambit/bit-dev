import React from 'react';
import ReactJson from 'react-json-view';
import { createRow } from './create-row';

const icons = [
  'https://static.bit.dev/brands/logo-auth0.svg',
  'https://static.bit.dev/brands/logo-tailwindcss.svg',
  'https://static.bit.dev/brands/logo-npm.svg',
  'https://static.bit.dev/brands/logo-babbel.svg',
  'https://static.bit.dev/brands/logo-gatsby.svg',
  'https://static.bit.dev/brands/logo-cypress.svg',
  'https://static.bit.dev/brands/logo-mongodb.svg',
];

export const CreateRowExample = () => <ReactJson src={createRow(1, 1, icons)} />;

CreateRowExample.canvas = {
  height: 700,
  overflow: 'scroll',
};
