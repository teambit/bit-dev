import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentCardGrid } from './component-card-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponentCardGrid />);
  const rendered = getByText('hello from ComponentCardGrid');
  expect(rendered).toBeTruthy();
});
