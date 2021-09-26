import { inflateToTree } from './inflate-paths';

it('build tree from paths', () => {
  const result = inflateToTree(['path'], (x) => x);

  expect(result).toEqual({
    id: 'path',
    children: undefined,
  });
});

it('should use key selector', () => {
  const result = inflateToTree([{ id: 'path' }], (x) => x.id);

  expect(result).toEqual({
    id: 'path',
    children: undefined,
  });
});

it('should use key selector', () => {
  const result = inflateToTree([{ id: 'path' }], (x) => x.id);

  expect(result).toEqual({
    id: 'path',
    children: undefined,
  });
});

it('should create virtual root when items have no common ancestor', () => {
  const result = inflateToTree(['path', 'another'], (x) => x);
  expect(result).toEqual({
    id: '',
    children: [
      {
        id: 'another',
        children: undefined,
      },
      {
        id: 'path',
        children: undefined,
      },
    ],
  });
});
