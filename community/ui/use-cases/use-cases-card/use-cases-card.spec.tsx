import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCasesCard } from './use-cases-card.composition';

it('should render with a title', () => {
  const { getByText } = render(<BasicUseCasesCard />);
  const rendered = getByText('Component Library');
  expect(rendered).toBeTruthy();
});

it('should render with a text', () => {
  const { getByText } = render(<BasicUseCasesCard />);
  const rendered = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, quam sed.');
  expect(rendered).toBeTruthy();
});

it('should contain an image', () => {
  render(<BasicUseCasesCard />);
  const displayedImage = document.querySelector('img') as HTMLImageElement;
  expect(displayedImage.src).toContain('https://storage.googleapis.com/static.bit.dev/Community/use-cases/library.svg');
});

it('image should contain an alt tag', () => {
  const { getByAltText } = render(<BasicUseCasesCard />);
  const rendered = getByAltText('Library of Frameworks');
  expect(rendered).toBeTruthy();
});
