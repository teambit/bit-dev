import React from 'react';
import { render } from '@testing-library/react';
import { BasicBubbleGraph } from './bubble-graph.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicBubbleGraph />);
  const rendered = getByText('hello from BubbleGraph');
  expect(rendered).toBeTruthy();
});
