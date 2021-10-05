import React from 'react';
import { render } from '@testing-library/react';
import { BasicFeaturesSection } from './features-section.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicFeaturesSection />);
  const rendered = getByText('hello from FeaturesSection');
  expect(rendered).toBeTruthy();
});
