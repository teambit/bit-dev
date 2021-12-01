import React from 'react';
import { render } from '@testing-library/react';
import { BasicCategory } from './category.composition';

describe('category list', () => {
  it('should render with the correct title', () => {
    const { getByText } = render(<BasicCategory />);
    const rendered = getByText('Follow us');
    expect(rendered).toBeTruthy();
  });

  it('should render the correct text in link', () => {
    const { getByText } = render(<BasicCategory />);
    const rendered = getByText('Bit');
    expect(rendered).toBeInTheDocument();
  });

  it('should render correct href in link', () => {
    const { getByText } = render(<BasicCategory />);
    const rendered = getByText('Bit');
    expect(rendered.closest('a')).toHaveAttribute('href', 'https://bit.dev');
  });
});
