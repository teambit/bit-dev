import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCasesSection } from './use-cases-section.composition';

it('should render with the correct title text', () => {
  const { getByText } = render(<BasicUseCasesSection />);
  const rendered = getByText('These are no longer a challenge');

  expect(rendered).toBeTruthy();
});
it('should render with the correct link text', () => {
  const { getByText } = render(<BasicUseCasesSection />);
  const rendered = getByText('See more use cases');

  expect(rendered).toBeTruthy();
});
