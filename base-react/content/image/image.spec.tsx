import React from 'react';
import { render } from '@testing-library/react';
import { BasicImage, BackgroundImage } from './image.composition';

it('should have an alt attribute and src attribute', () => {
  const { getByAltText } = render(<BasicImage />);
  const rendered = getByAltText('bit logo');
  expect(rendered).toBeTruthy();
  expect(rendered).toContainHTML('src');
});

it('text should be rendered in the background image', () => {
  const { getByText } = render(<BackgroundImage />);
  const rendered = getByText('children displayed over the background image');
  expect(rendered).toBeTruthy();
});
