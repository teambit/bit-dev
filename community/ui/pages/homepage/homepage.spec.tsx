import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomepage } from './homepage.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicHomepage />);
  const rendered = getByText('Build in components');
  expect(rendered).toBeTruthy();
});
