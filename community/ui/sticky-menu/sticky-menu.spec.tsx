import React from 'react';
import { render } from '@testing-library/react';
import { BasicStickyMenu } from './sticky-menu.composition';

it('should render with the `compose` item', () => {
  const { getByText } = render(<BasicStickyMenu />);
  const rendered = getByText('Compose');
  expect(rendered).toBeTruthy();
});
