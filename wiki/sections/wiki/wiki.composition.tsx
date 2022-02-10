import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Wiki } from './wiki';

export const BasicWiki = () => {
  return (
    <MemoryRouter>
      <Wiki />
    </MemoryRouter>
  );
};
