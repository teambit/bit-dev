import React from 'react';
import { render } from '@testing-library/react';
import { BasicDistribution } from './distribution.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicDistribution />);
  const rendered = getByText('Limitless Distribution');
  expect(rendered).toBeTruthy();
});
