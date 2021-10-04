import React from 'react';
import { render } from '@testing-library/react';
import { BasicBubbleEdge } from './edge.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicBubbleEdge />);
  const rendered = getByText('hello from BubbleEdge');
  expect(rendered).toBeTruthy();
});
