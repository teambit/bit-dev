import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseLocation } from './use-location.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseLocation />);
  const rendered = getByText('hello from UseLocation');
  expect(rendered).toBeTruthy();
});
