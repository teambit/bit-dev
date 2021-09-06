import React from 'react';
import { render } from '@testing-library/react';
import { BasicPluginGroup } from './plugin-group.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPluginGroup />);
  const rendered = getByText('hello from PluginGroup');
  expect(rendered).toBeTruthy();
});
