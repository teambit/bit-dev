import { ComponentContext } from '@teambit/generator';

export function docsFile({ namePascalCase }: ComponentContext) {
  return `---
description: 'A community doc.'
labels: ['content', 'mdx']
---

import ${namePascalCase} from './index';

### Component usage
\`\`\`js
<${namePascalCase} />
\`\`\`
`;
}
