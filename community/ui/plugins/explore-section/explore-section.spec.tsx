import React from 'react';
import { render } from '@testing-library/react';
import { BasicExploreSection, ExploreBubbleGraph } from './explore-section.composition';

describe('should render explore section', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<BasicExploreSection />);
    rendered = getByTestId('explore-section');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include 33 img tag', () => {
    expect(rendered.querySelectorAll('img').length).toBe(33);
  });
  it('should have h1 element', () => {
    expect(rendered.querySelector('h1')).toBeTruthy();
  });
});

describe('should render explore bubble graph', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<ExploreBubbleGraph />);
    rendered = getByTestId('explore-graph');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include 33 img tag', () => {
    expect(rendered.querySelectorAll('img').length).toBe(33);
  });
  it('should have 33 bubble childrens element', () => {
    expect(rendered.childElementCount).toBe(33);
  });
});
