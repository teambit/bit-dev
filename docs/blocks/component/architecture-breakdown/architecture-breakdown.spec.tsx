import React from 'react';
import { render } from '@testing-library/react';
import { BasicArchitectureBreakdown } from './architecture-breakdown.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicArchitectureBreakdown />);
  const rendered = getByText('Inventions');
  expect(rendered).toBeTruthy();
});
