import React from 'react';
import { render } from '@testing-library/react';
import { BasicCreateSection } from './create-section.composition';

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
