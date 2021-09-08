import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogo } from './logo.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLogo />);
  const rendered = getByText('hello from Logo');
  expect(rendered).toBeTruthy();
});
