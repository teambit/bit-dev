import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { WikiApp } from './app';

export const WikiBasic = () => {
  return (
    <MemoryRouter>
      <WikiApp />
    </MemoryRouter>
  );
};
