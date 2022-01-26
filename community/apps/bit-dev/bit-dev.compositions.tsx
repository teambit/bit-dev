import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { BitDevApp } from './app';

export const BitDevBasic = () => {
  return (
    <MemoryRouter>
      <BitDevApp />
    </MemoryRouter>
  );
};