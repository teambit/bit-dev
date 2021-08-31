import React from 'react';
import { render } from '@testing-library/react';
import { BasicImageStrip } from './image-strip.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<BasicImageStrip />);
  const rendered = getByTestId('test-image-strip');
  expect(rendered).toBeTruthy();
});
