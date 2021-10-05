import React from 'react';
import { render } from '@testing-library/react';
import { BasicGrid } from './grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGrid />);
  const rendered = getByText('my content in a grid');
  expect(rendered).toBeTruthy();
});
