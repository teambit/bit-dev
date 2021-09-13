import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCasesSection } from './use-cases-section.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseCasesSection />);
  const rendered = getByText('hello from UseCasesSection');
  expect(rendered).toBeTruthy();
});
