import React from 'react';
import { render } from '@testing-library/react';
import { BasicPlugins } from './plugins.composition';

it('should be in the document', () => {
  const { getByTestId } = render(<BasicPlugins />);
  const rendered = getByTestId('plugins-page');
  expect(rendered).toBeInTheDocument();
});
