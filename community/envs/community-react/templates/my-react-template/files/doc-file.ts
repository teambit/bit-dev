import { ComponentContext } from '@teambit/generator';

export function docFile({ namePascalCase, name }: ComponentContext) {
  return `---
description: '${namePascalCase}'
labels: ['label1', 'label2', 'label3']
---

import { ${namePascalCase} } from './${name}';
import { FigmaEmbed } from '@teambit/design.embeds.figma';

Div with some text

### Renders a div with some text

\`\`\`js live
<${namePascalCase} text="hello" />
\`\`\`

### Design

<FigmaEmbed src="url-to-figma" />
`;
}
