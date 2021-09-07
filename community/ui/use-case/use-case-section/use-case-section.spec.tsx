import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCaseSection } from './use-case-section.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseCaseSection />);
  const rendered = getByText('hello from UseCaseSection');
  expect(rendered).toBeTruthy();
});
