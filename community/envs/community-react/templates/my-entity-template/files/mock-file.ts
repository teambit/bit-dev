import { ComponentContext } from '@teambit/generator';

export function mockFile({ namePascalCase }: ComponentContext) {
  return `export const mock${namePascalCase} = [
  {
    key: 'value',
    key2: 'value2'
  },
]
`;
}
