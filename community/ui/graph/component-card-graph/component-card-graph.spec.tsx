import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentCardGraph } from './component-card-graph.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponentCardGraph />);
  const rendered = getByText('hello from ComponentCardGraph');
  expect(rendered).toBeTruthy();
});
