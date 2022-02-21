import React from 'react';
import { render } from '@testing-library/react';
import { BasicBubbleHighlighter } from './bubble-highlighter.composition';

describe('Bubble highlighter', () => {
  it('should render', () => {
    const { container } = render(<BasicBubbleHighlighter />);

    expect(container).toBeInTheDocument();
  });
  it('should render with bubble highlighter holder', () => {
    const { container } = render(<BasicBubbleHighlighter />);
    const bubbleEl = container.querySelector('#teambit-design-ui-buttons-button');
    const buttonEl = bubbleEl?.querySelector('button');

    expect(bubbleEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});
