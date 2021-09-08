import React from 'react';
import { render } from '@testing-library/react';
import { BasicBenefitsSection } from './benefits-section.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBenefitsSection />);
  const rendered = getByText('hello from BenefitsSection');
  expect(rendered).toBeTruthy();
});
