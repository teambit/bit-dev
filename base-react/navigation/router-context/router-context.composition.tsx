import React from 'react';
import { RouterContextProvider } from './router-context-provider';

export const BasicLink = () => {
  return (
    <RouterContextProvider>
      <a href="https://bit.dev">bit.dev</a>
    </RouterContextProvider>
  );
};

