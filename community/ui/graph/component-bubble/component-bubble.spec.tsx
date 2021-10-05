import React from 'react';
import { render } from '@testing-library/react';
import { BasicBubble } from './component-bubble.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicBubble />);
  const rendered = getByText('hello from Bubble');
  expect(rendered).toBeTruthy();
});
