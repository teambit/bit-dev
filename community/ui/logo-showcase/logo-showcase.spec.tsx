import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogoShowcase } from './logo-showcase.composition';

it.skip('should have an alt attribute', () => {
  const { getByAltText } = render(<BasicLogoShowcase />);
  const rendered = getByAltText('Moodys');
  expect(rendered).toBeTruthy();
});

it.skip('should have src attribute', () => {
  const { getByTestId } = render(<BasicLogoShowcase />);
  const rendered = getByTestId('test-logo-showcase').childNodes[0];
  expect(rendered).toContainHTML('src');
});

it.skip('should have loading attribute', () => {
  const { getByTestId } = render(<BasicLogoShowcase />);
  const rendered = getByTestId('test-logo-showcase').childNodes[0];
  expect(rendered).toContainHTML('loading');
});
