import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomepage } from './homepage.composition';

//@TODO
it.skip('should be in the document', () => {
  const { getByTestId } = render(<BasicHomepage />);
  const rendered = getByTestId('home-page');
  expect(rendered).toBeInTheDocument();
});
