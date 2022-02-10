import React from 'react';
import { render } from '@testing-library/react';
import { BasicWiki } from './wiki.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicWiki />);
  const rendered = getByText('Scaling in Components');
  expect(rendered).toBeTruthy();
});

it('should display the welcome page on the root ("") path', () => {
  const { getByText } = render(<BasicWiki />);
  const rendered = getByText('Welcome to .bit');
  expect(rendered).toBeTruthy();
});
