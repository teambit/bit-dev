import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCaseCardGrid } from './use-case-card-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseCaseCardGrid />);
  const rendered = getByText('hello from UseCaseCardGrid');
  expect(rendered).toBeTruthy();
});
