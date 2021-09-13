import React from 'react';
import { render } from '@testing-library/react';
import { BasicStickyMenu } from './sticky-menu.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStickyMenu />);
  const rendered = getByText('hello from StickyMenu');
  expect(rendered).toBeTruthy();
});
