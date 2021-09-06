import React from 'react';
import { render } from '@testing-library/react';
import { BasicImageStrip } from './image-strip.composition';

it('should have an alt attribute', () => {
  const { getByAltText } = render(<BasicImageStrip />);
  const rendered = getByAltText('Moodys');
  expect(rendered).toBeTruthy();
});

it('should have src attribute', () => {
  const { getByTestId } = render(<BasicImageStrip />);
  const rendered = getByTestId('test-image-strip').childNodes[0];
  expect(rendered).toContainHTML('src');
});

it('should have loading attribute', () => {
  const { getByTestId } = render(<BasicImageStrip />);
  const rendered = getByTestId('test-image-strip').childNodes[0];
  expect(rendered).toContainHTML('loading');
});
