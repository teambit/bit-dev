import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentBubbleNonInteractive } from './component-bubble-non-interactive.composition';

describe('should render a non interactive bubble', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<BasicComponentBubbleNonInteractive />);
    rendered = getByTestId('test-component-bubble');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include img tag', () => {
    expect(rendered.lastElementChild?.tagName).toBe('IMG');
  });
  it('should include svg tag', () => {
    expect(rendered.firstElementChild?.tagName).toBe('svg');
  });
  it('should have only two childrens element when the bubble is non interactive', () => {
    expect(rendered.childElementCount).toBe(2);
  });
});
