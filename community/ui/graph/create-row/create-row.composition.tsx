import React from 'react';
import ReactJson from 'react-json-view';
import { createRow } from './create-row';

const icons = [
  'logo-auth0.svg',
  'logo-tailwindcss.svg',
  'logo-npm.svg',
  'logo-babbel.svg',
  'logo-gatsby.svg',
  'logo-cypress.svg',
  'logo-mongodb.svg',
];

export const CreateRowExample = () => <ReactJson src={createRow(1, 1, icons)} />;

CreateRowExample.canvas = {
  height: 700,
  overflow: 'scroll',
};
