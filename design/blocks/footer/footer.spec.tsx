import React from 'react';
import { render } from '@testing-library/react';
import { BasicFooter } from './footer.composition';

it('should render the footer correctly', () => {
  const { getByTestId } = render(<BasicFooter />);
  const rendered = getByTestId('footer');
  expect(rendered).toBeTruthy();
});

it('should render the footer with both categories with correct titles', () => {
  const { getByText } = render(<BasicFooter />);
  const firstCategory = getByText('links with icons');
  const secondCategory = getByText('links without icons');
  expect(firstCategory).toBeInTheDocument();
  expect(secondCategory).toBeInTheDocument();
});

it('should render the footer with 2 children', () => {
  const { getByTestId } = render(<BasicFooter />);
  const rendered = getByTestId('footer');
  expect(rendered.children).toHaveLength(2);
});
