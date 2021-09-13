import React from 'react';
import { render } from '@testing-library/react';
import { BasicLink } from './link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLink />);
  const rendered = getByText('hello from Link');
  expect(rendered).toBeTruthy();
});
