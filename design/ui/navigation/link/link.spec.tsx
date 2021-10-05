import React from 'react';
import { render } from '@testing-library/react';
import { BasicLink } from './link.composition';

it('should render a link with correct text', () => {
  const { getByText } = render(<BasicLink />);
  const rendered = getByText('Go to bit.dev');
  expect(rendered).toBeTruthy();
});
