import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentDistributionSection } from './component-distribution.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponentDistributionSection />);
  const rendered = getByText('hello from BuildComponents');
  expect(rendered).toBeTruthy();
});
