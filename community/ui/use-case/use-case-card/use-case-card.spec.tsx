import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCaseCard } from './use-case-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseCaseCard />);
  const rendered = getByText('hello from UseCaseCard');
  expect(rendered).toBeTruthy();
});
