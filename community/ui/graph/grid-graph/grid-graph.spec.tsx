import React from 'react';
import { render } from '@testing-library/react';
import { BasicGridGraph } from './grid-graph.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGridGraph />);
  const rendered = getByText('hello from GridGraph');
  expect(rendered).toBeTruthy();
});
