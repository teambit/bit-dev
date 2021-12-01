import React from 'react';
import { render } from '@testing-library/react';
import { BasicFooter } from './footer.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicFooter />);
  const rendered = getByText('hello from Footer');
  expect(rendered).toBeTruthy();
});
