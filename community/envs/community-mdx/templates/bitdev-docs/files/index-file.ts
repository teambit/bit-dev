import type { ComponentContext } from '@teambit/generator';

export function indexFile({ name, namePascalCase }: ComponentContext) {
  return `export { default as ${namePascalCase}, default } from './${name}.mdx'`;
}
