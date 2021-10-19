import React from 'react';
import { render } from '@testing-library/react';
import { BasicDistribution } from './distribution.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDistribution />);
  const rendered = getByText('hello from Distribution');
  expect(rendered).toBeTruthy();
});
