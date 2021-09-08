import React from 'react';
import { render } from '@testing-library/react';
import { BasicBenefitsCardGrid } from './benefits-card-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBenefitsCardGrid />);
  const rendered = getByText('hello from BenefitsCardGrid');
  expect(rendered).toBeTruthy();
});
