import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { createRow } from '@teambit/community.ui.plugins.create-row';

export function mockBubbleGraph() {
  const rowOne = ['logo-Linter.svg', 10, 'logo-less.svg'];
  const rowTwo = ['logo-gatsby.svg', 'logo-mdx.svg', 7, 'logo-react.svg', 'logo-webpack.svg', 'logo-tailwindcss.svg'];
  const rowThree = ['logo-cypress.svg', 'logo-babbel.svg', 8, 'logo-jest.svg', 'logo-figma.svg'];
  const rowFour = ['logo-contentful.svg', 'logo-auth0.svg', 8, 'logo-styled-components.svg', 'logo-lit.svg'];
  const rowFive = ['logo-mocha.svg', 8, 'logo-eslint.svg?v=0.1', 'logo-yarn.svg'];
  const rowSix = ['logo-mongodb.svg', 'logo-typescript.svg', 6, 'logo-next.svg', 'logo-sketch.svg'];
  const rowSeven = ['logo-stencil.svg', 'logo-npm.svg', 4, 'logo-nodejs.svg', 'logo-vue.svg'];
  const rowEight = ['logo-zeplin.svg', 'logo-serverless.svg', 2, 'github.svg'];
  const rowNine = ['logo-angular.svg', 'logo-grphql.svg'];
  return createBubbleGraph([
    ...createRow(1, 1, rowOne),
    ...createRow(2, 1, rowTwo),
    ...createRow(3, 1, rowThree),
    ...createRow(4, 1, rowFour),
    ...createRow(5, 2, rowFive),
    ...createRow(6, 2, rowSix),
    ...createRow(7, 3, rowSeven),
    ...createRow(8, 4, rowEight),
    ...createRow(9, 6, rowNine),
  ]);
}
