import React from 'react';
import { render } from '@testing-library/react';
import { BasicSubtitle } from './subtitle.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSubtitle />);
  const rendered = getByText('hello from Subtitle');
  expect(rendered).toBeTruthy();
});
