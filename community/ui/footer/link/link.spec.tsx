import React from 'react';
import { render } from '@testing-library/react';
import { LinkWithIcon, LinkWithImage } from './link.composition';

describe('footer link', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<LinkWithIcon />);
    const rendered = getByText('Slack');
    expect(rendered).toBeTruthy();
  });

  it('should render with the correct icon', () => {
    const { getByText } = render(<LinkWithIcon />);
    const rendered = getByText('Slack');
    expect(rendered).toBeTruthy();
  });

  it('should render with the correct href', () => {
    const { getByText } = render(<LinkWithIcon />);
    const rendered = getByText('Slack');
    expect(rendered.closest('a')).toHaveAttribute('href', 'https://slack.com');
  });

  it('should support url image', () => {
    const { getByTestId } = render(<LinkWithImage />);
    const rendered = getByTestId('bit-link').childNodes[0];
    expect(rendered).toHaveAttribute(
      'src',
      'https://static.bit.dev/bit-logo.svg'
    );
  });
});
