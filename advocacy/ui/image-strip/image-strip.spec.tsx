import React from 'react';
import { render } from '@testing-library/react';
import { BasicImageStrip } from './image-strip.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicImageStrip />);
  const rendered = getByText('hello from ImageStrip');
  expect(rendered).toBeTruthy();
});
