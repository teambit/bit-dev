import React from 'react';
import { render } from '@testing-library/react';
import { BasicNotFound } from './not-found.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNotFound />);
  const rendered = getByText('Lost in space...');
  expect(rendered).toBeTruthy();
});
