import { ComponentContext, ComponentTemplate } from '@teambit/generator';
import { implementationFile } from './files/implementation-file';
import { compositionFile } from './files/composition-file';
import { docsFile } from './files/docs-file';
import { testFile } from './files/test-file';
import { indexFile } from './files/index-file';

export const mdxCommunity: ComponentTemplate = {
  name: 'mdx-community',
  description: 'An MDX component for community content',
  hidden: false,
  generateFiles: (context: ComponentContext) => {
    return [
      {
        relativePath: 'index.ts',
        content: indexFile(context),
        isMain: true,
      },
      {
        relativePath: `${context.name}.mdx`,
        content: implementationFile(context),
      },
      {
        relativePath: `${context.name}.composition.tsx`,
        content: compositionFile(context),
      },
      {
        relativePath: `${context.name}.docs.mdx`,
        content: docsFile(context),
      },
      {
        relativePath: `${context.name}.spec.tsx`,
        content: testFile(context),
      },
    ];
  },
};
