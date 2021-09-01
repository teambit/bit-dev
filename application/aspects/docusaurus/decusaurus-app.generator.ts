import fs from 'fs';

export function docusaurusGenerator() {
  return {
    name: 'docusaurus-app',
    description: 'create a docusaurus app',
    generateFiles: () => {
      return [
        {
          relativePath: 'sidebars.js',
          content: fs.readFileSync(require.resolve('./app-template/sidebars.js')).toString()
        },
        {
          relativePath: 'docusaurus.config.js',
          content: fs.readFileSync(require.resolve('./app-template/docusaurus.config.js')).toString()
        }
      ];
    }
  }
}
