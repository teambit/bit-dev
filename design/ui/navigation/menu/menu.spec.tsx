import React from 'react';
import { render } from '@testing-library/react';
import { BasicMenu } from './menu.composition';

it('should render correctly', () => {
  const { getByTestId } = render(<BasicMenu />);
  const rendered = getByTestId('basic-menu');
  expect(rendered).toBeTruthy();
});
it('should render with 3 links', () => {
  const { getByTestId } = render(<BasicMenu />);
  const rendered = getByTestId('basic-menu');
  expect(rendered.children).toHaveLength(3);
});
