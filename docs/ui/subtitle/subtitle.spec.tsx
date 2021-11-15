import React from 'react';
import { render } from '@testing-library/react';
import { BasicSubtitle } from './subtitle.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSubtitle />);
  const rendered = getByText('Simple subtitle example');
  expect(rendered).toBeTruthy();
});
