import React from 'react';
import { render } from '@testing-library/react';
import { BasicImage } from './image.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicImage />);
  const rendered = getByTestId('test-img');
  expect(rendered.tagName).toEqual('IMG');
});

it('should pass classname', () => {
  const { getByTestId } = render(<BasicImage className="testclass" />);
  const rendered = getByTestId('test-img');
  expect(rendered.className).toContain('testclass');
});

it('should contain an alt tag', () => {
  const { getByAltText } = render(<BasicImage />);
  const rendered = getByAltText('world');
});

it('should prefix src with storageUrl', () => {
  const { getByTestId } = render(<BasicImage />);
  const rendered = getByTestId('test-img');
  expect(rendered.getAttribute('src')).toEqual(
    'staticStorageUrl/homepage-bit/map.png'
  );
});

it('should add the class of fullwidth when fullwidth prop is set', () => {
  const { getByTestId } = render(<BasicImage fullWidth />);
  const rendered = getByTestId('test-img');
  expect(rendered.className).toContain('fullWidth');
});
