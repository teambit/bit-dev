import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { createRow } from '@teambit/community.ui.graph.create-row';

export function mockBubbleGraph() {
  const rowOne = [
    'logo-auth0.svg',
    'logo-tailwindcss.svg',
    'logo-npm.svg',
    'logo-babbel.svg',
    'logo-gatsby.svg',
    'logo-cypress.svg',
    'logo-mongodb.svg',
  ];
  const rowTwo = [
    'logo-grphql.svg',
    'logo-stencil.svg',
    'logo-Linter.svg',
    'logo-lit.svg',
    'logo-next.svg',
    'logo-less.svg',
    'logo-serverless.svg',
  ];
  const rowThree = [
    'logo-yarn.svg',
    'logo-react.svg',
    'logo-jest.svg',
    'logo-typescript.svg',
    'logo-angular.svg',
    'logo-nodejs.svg',
  ];
  const rowFour = [
    'logo-styled-components.svg',
    'logo-figma.svg',
    'logo-mdx.svg',
    'logo-webpack.svg',
    'logo-sass.svg',
    'github.svg',
  ];
  const rowFive = [
    'logo-contentful.svg',
    'logo-zeplin.svg',
    'logo-sketch.svg',
    'logo-vue.svg',
    'logo-eslint.svg?v=0.1',
    'logo-javascript.svg',
    'logo-mocha.svg',
  ];
  return createBubbleGraph([
    ...createRow(1, 2, rowOne),
    ...createRow(2, 3, rowTwo),
    ...createRow(3, 3, rowThree),
    ...createRow(4, 2, rowFour),
    ...createRow(5, 1, rowFive),
  ]);
}
