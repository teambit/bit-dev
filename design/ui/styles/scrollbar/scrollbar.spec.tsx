import React from 'react';
import { render } from '@testing-library/react';
import { BasicScrollbar } from './scrollbar.composition';

describe('should render scrollbar', () => {
  it('should be in the document', () => {
    const { getByTestId } = render(<BasicScrollbar />);
    const rendered = getByTestId('test-scrollbar');

    expect(rendered).toBeInTheDocument();
  });
  it('should render with the scrollbar self class on Windows OS', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Windows',
      writable: true,
    });
    const { getByTestId } = render(<BasicScrollbar />);
    const rendered = getByTestId('test-scrollbar');

    expect(rendered.classList.contains('scrollbarSelf')).toBeTruthy();
  });
  it('should render without the scrollbar self class on non Windows OS', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'MacIntel',
      writable: true,
    });
    const { getByTestId } = render(<BasicScrollbar />);
    const rendered = getByTestId('test-scrollbar');

    expect(rendered.classList.contains('scrollbarSelf')).toBeFalsy();
  });
});
