import { ComponentContext } from '@teambit/generator';

export function docFile(context: ComponentContext) {
  return `---
  description: '${context.namePascalCase}'
  labels: ['label1', 'label2', 'label3']
  ---

  import { ${context.namePascalCase} } from './${context.name}';
  import { FigmaEmbed } from '@teambit/design.embeds.figma';

  // Add a description of your component
  Detailed description of the component.

  // Show how to use the component if not using live playground
  ### Component Usage

  \`\`\`js
  <${context.namePascalCase} text="hello" />
  \`\`\`

  // Describe what is shown in the live playground
  ### Shows a text of Hello

  \`\`\`js live
  <${context.namePascalCase} text="hello" />
  \`\`\`

  // Add more live playground examples if it makes sense

  ### Design

  // add the url to Figma file if there are any design elements or remove if not using
  <FigmaEmbed src="" />
  `;
}
