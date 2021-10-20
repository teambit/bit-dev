import React from 'react';
import { render } from '@testing-library/react';
import { BasicLeftRight } from './left-right.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLeftRight />);
  const rendered = getByText('hello from LeftRight');
  expect(rendered).toBeTruthy();
});
