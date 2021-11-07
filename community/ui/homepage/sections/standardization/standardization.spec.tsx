import React from 'react';
import { render } from '@testing-library/react';
import { BasicStandardization } from './standardization.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStandardization />);
  const rendered = getByText('hello from Standardization');
  expect(rendered).toBeTruthy();
});
