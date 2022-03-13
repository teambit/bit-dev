import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicFeatured } from './featured.composition';
import { cardsMock } from './card.mock';

describe('featured', () => {
  it('should render', () => {
    render(<BasicFeatured />);
    expect(screen.getByTestId('featured-container')).toBeInTheDocument();
  });

  it('checks main header exists with the correct text', () => {
    render(<BasicFeatured />);
    const heading = screen.getAllByRole('heading')[0];
    expect(heading).toHaveTextContent('Start by building your own composable...');
  });
  it('renders all the cards', () => {
    render(<BasicFeatured />);
    cardsMock.forEach((card, index) => {
      const cardEl = screen.getAllByTestId(`card-${index}`)[0];
      expect(cardEl).toBeInTheDocument();
    });
  });
});
