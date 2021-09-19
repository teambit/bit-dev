import React from 'react';
import { render } from '@testing-library/react';
import { BasicBubbleHighlighter } from './bubble-highlighter.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBubbleHighlighter />);
  const rendered = getByText('hello from BubbleHighlighter');
  expect(rendered).toBeTruthy();
});
