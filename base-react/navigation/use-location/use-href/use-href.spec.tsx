import React from 'react';
import { render } from '@testing-library/react';
import type { Location } from '@teambit/base-react.navigation.router-context';
import { useHref } from './use-href';

it('should make url with pathname', () => {
  const { getByText } = render(<RenderHook location={{ pathname: '/some/path' }} />);
  const rendered = getByText('[/some/path]');
  expect(rendered).toBeTruthy();
});

it('should make url with query only', () => {
  const { getByText } = render(<RenderHook location={{ search: 'what=isIt' }} />);
  const rendered = getByText('[?what=isIt]');
  expect(rendered).toBeTruthy();
});

it('should make url with hash only', () => {
  const { getByText } = render(<RenderHook location={{ hash: 'dhj42kjd' }} />);
  const rendered = getByText('[#dhj42kjd]');
  expect(rendered).toBeTruthy();
});

it('should support query starting with a question mark (without duplicates)', () => {
  const { getByText } = render(<RenderHook location={{ pathname: '/some/path', search: '?what=isIt' }} />);
  const rendered = getByText('[/some/path?what=isIt]');
  expect(rendered).toBeTruthy();
});

it('should support hash starting with a hashtag (without duplicates)', () => {
  const { getByText } = render(<RenderHook location={{ pathname: '/some/path', hash: '#dajk23ds' }} />);
  const rendered = getByText('[/some/path#dajk23ds]');
  expect(rendered).toBeTruthy();
});

function RenderHook({ location }: { location: Partial<Location> }) {
  const href = useHref(location);
  // using [ ] to verify there are no tailing spaces
  return <div>[{href}]</div>;
}
