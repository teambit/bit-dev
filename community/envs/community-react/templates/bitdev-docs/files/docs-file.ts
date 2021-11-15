import { ComponentContext } from '@teambit/generator';

export function docsFile({ name, namePascalCase }: ComponentContext) {
  return `---
description: 'A community doc.'
labels: ['content', 'mdx',]
---

import ${namePascalCase} from './index';

### Component usage
\`\`\`js
<${namePascalCase} />
\`\`\`

### Render with theme and MDX providers

\`\`\`js
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions'
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout'
import { ${namePascalCase} } from './index'

<ThemeCompositions>
  <MDXLayout>
    <${namePascalCase} />
  </MDXLayout>
</ThemeCompositions>
\`\`\`
`;
}
