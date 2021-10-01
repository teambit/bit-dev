import { ComponentContext } from '@teambit/generator';

export function indexFile({ namePascalCase }: ComponentContext) {
  return `export { ${ namePascalCase} } from './${context.name}';
  export type { ${ namePascalCase}Props } from './${context.name}';
  `;
}
