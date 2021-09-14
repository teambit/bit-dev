import React from 'react';
import { render } from '@testing-library/react';
import { BasicFeaturesCardGrid } from './features-card-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFeaturesCardGrid />);
  const rendered = getByText('hello from FeaturesCardGrid');
  expect(rendered).toBeTruthy();
});
