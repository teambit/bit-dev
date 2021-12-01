import React from 'react';
import { render } from '@testing-library/react';
import { BasicMenu } from './menu.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicMenu />);
  const rendered = getByText('hello from Menu');
  expect(rendered).toBeTruthy();
});
