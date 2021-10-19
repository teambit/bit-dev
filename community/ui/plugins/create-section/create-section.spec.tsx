import React from 'react';
import { render } from '@testing-library/react';
import { BasicCreateSection, CreateBubbleGraph } from './create-section.composition';

describe('should render create section', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<BasicCreateSection />);
    rendered = getByTestId('create-section');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include 31 img tag', () => {
    expect(rendered.querySelectorAll('img').length).toBe(31);
  });
  it('should have h2 element', () => {
    expect(rendered.querySelector('h2')).toBeTruthy();
  });
});

describe('should render create bubble graph', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<CreateBubbleGraph />);
    rendered = getByTestId('create-graph');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include 31 img tag', () => {
    expect(rendered.querySelectorAll('img').length).toBe(31);
  });
  it('should have 31 bubble childrens element', () => {
    expect(rendered.childElementCount).toBe(31);
  });
});
