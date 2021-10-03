import { ComponentContext } from '@teambit/generator';

export function indexFile({ namePascalCase, name }: ComponentContext) {
  return `export { ${namePascalCase} } from './${name}';
export type { ${namePascalCase}Props } from './${name}';
`;
}
