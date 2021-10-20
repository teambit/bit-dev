import React from 'react';
import { render } from '@testing-library/react';
import { ReactBubble } from './component-bubble.composition';

describe('should render component bubble', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<ReactBubble />);
    rendered = getByTestId('component-bubble');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include img tag', () => {
    expect(rendered.querySelector('img')).toBeTruthy();
  });
  it('should include svg tag', () => {
    expect(rendered.querySelector('svg')).toBeTruthy();
  });
});
