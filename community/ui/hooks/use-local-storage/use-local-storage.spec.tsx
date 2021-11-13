import React from 'react';
import { render } from '@testing-library/react';
import { UseLocalStorageWithDefaultValue, UseLocalStorageWithNoDefaultValue } from './use-local-storage.composition';

it('should render input with empty value from the local storage', () => {
  const { container } = render(<UseLocalStorageWithNoDefaultValue />);
  const rendered = container.getElementsByTagName('input')[0].value;
  expect(rendered).toBe('');
});

it('should render input with default value from the local storage', () => {
  const { container } = render(<UseLocalStorageWithDefaultValue />);
  const rendered = container.getElementsByTagName('input')[0].value;
  expect(rendered).toBe('my-data');
});
