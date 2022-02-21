import React from 'react';
import { render } from '@testing-library/react';
import { BasicBrowser } from './browser.composition';

describe('Browser component', () => {
  it('should render', () => {
    const { container } = render(<BasicBrowser />);

    expect(container).toBeInTheDocument();
  });
  it('should render with two images', () => {
    const { container } = render(<BasicBrowser />);
    const imgTags = container.querySelectorAll('img');

    expect(imgTags.length).toBe(2);
  });
});
