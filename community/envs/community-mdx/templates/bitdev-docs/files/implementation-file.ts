import type { ComponentContext } from '@teambit/generator';

export function implementationFile({ namePascalCase }: ComponentContext) {
  const title = namePascalCase.replace(/([A-Z])/g, ' $1').trim();
  return `# ${title}`;
}
