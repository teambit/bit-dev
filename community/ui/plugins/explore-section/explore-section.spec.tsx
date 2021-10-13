import React from 'react';
import { render } from '@testing-library/react';
import { BasicExploreSection } from './explore-section.composition';

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
