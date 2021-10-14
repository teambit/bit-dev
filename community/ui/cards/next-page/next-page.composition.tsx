import React from 'react';
import { NextPage } from './next-page';

export const NextPageWithTitleAndText = () => (
  <NextPage text="Install Bit package in your project" title="Installing Bit" />
);
export const NextPageWithTitle = () => (
  <NextPage title="Installing Bit" />
);
export const NextPageWithText = () => (
  <NextPage text="Install Bit package in your project" />
  );
  export const NextPageWithTitleAndCustomButtonText = () => (
    <NextPage title="Installing Bit" buttonText="create new" />
  );
