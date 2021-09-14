import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCasesCardGrid } from './use-cases-card-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseCasesCardGrid />);
  const rendered = getByText('hello from UseCasesCardGrid');
  expect(rendered).toBeTruthy();
});
