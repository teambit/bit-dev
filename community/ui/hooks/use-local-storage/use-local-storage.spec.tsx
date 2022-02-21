import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
// import { UseLocalStorageWithDefaultValue, UseLocalStorageWithNoDefaultValue } from './use-local-storage.composition';
import { BasicUseOfLocalStorage } from './use-local-storage.composition';

// it('should render input with empty value from the local storage', () => {
//   const { container } = render(<UseLocalStorageWithNoDefaultValue />);
//   const rendered = container.getElementsByTagName('input')[0].value;
//   expect(rendered).toBe('');
// });

// it('should render input with default value from the local storage', () => {
//   const { container } = render(<UseLocalStorageWithDefaultValue />);
//   const rendered = container.getElementsByTagName('input')[0].value;
//   expect(rendered).toBe('my-data');
// });

it('should set and retreieve a value from the local storage', async () => {
  const { getByRole } = render(<BasicUseOfLocalStorage />);
  const inputField = getByRole('textbox');
  expect((inputField as HTMLInputElement).value).toBe('my-default-value');
  expect(localStorage.getItem('my-key')).toBe('"my-default-value"');
  console.log(localStorage.getItem('my-key'));
  fireEvent.change(inputField, {
    target: { value: 'new-value' },
  });
  await waitFor(() => {
    expect((inputField as HTMLInputElement).value).toBe('new-value');
  });
  expect(localStorage.getItem('my-key')).toBe('"new-value"');
});
