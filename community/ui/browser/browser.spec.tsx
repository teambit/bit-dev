import React from 'react';
import { render } from '@testing-library/react';
import { BasicBrowser } from './browser.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBrowser />);
  const rendered = getByText('hello from Browser');
  expect(rendered).toBeTruthy();
});
