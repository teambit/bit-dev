import React from 'react';
import { render } from '@testing-library/react';

import { Category } from './category';

const BasicCategory = () => (
  <Category
    title="Follow us"
    links={[
      { icon: 'https://static.bit.dev/bit-logo.svg', text: 'Bit', href: 'https://bit.dev', id: 'bit-link' },
      { icon: 'slack', text: 'Slack', href: '#' },
      { icon: 'twitter-logo', text: 'Twitter', href: '#' },
      { icon: 'github-logo', text: 'Github', href: '#' },
    ]}
  />
);

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
