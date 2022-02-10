import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BasicWiki } from './wiki.composition';

it('should render with the correct text', () => {
  const { getByText } = render(
    <MemoryRouter>
      <BasicWiki />
    </MemoryRouter>
  );
  const rendered = getByText('Scaling in Components');
  expect(rendered).toBeTruthy();
});

it('should display the welcome page on the root ("") path', () => {
  const { getByText } = render(
    <MemoryRouter>
      <BasicWiki />
    </MemoryRouter>
  );
  const rendered = getByText('Welcome to .bit');
  expect(rendered).toBeTruthy();
});
