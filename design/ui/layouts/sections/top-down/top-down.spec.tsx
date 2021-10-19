import React from 'react';
import { render } from '@testing-library/react';
import { BasicTopDown } from './top-down.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTopDown />);
  const rendered = getByText('hello from TopDown');
  expect(rendered).toBeTruthy();
});
