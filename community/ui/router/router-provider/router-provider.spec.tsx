import React from 'react';
import { render } from '@testing-library/react';
import { BasicRouterProvider } from './router-provider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRouterProvider />);
  const rendered = getByText('hello from RouterProvider');
  expect(rendered).toBeTruthy();
});
