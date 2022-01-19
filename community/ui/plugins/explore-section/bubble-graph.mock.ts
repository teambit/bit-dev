import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { createRow } from '@teambit/community.ui.graph.create-row';

const staticBaseUrl = 'https://static.bit.dev/brands/';

function makeBubbleGraph() {
  const rowOne = [
    `${staticBaseUrl}logo-auth0.svg`,
    `${staticBaseUrl}logo-tailwindcss.svg`,
    `${staticBaseUrl}logo-npm.svg`,
    `${staticBaseUrl}logo-babbel.svg`,
    `${staticBaseUrl}logo-gatsby.svg`,
    `${staticBaseUrl}logo-cypress.svg`,
    `${staticBaseUrl}logo-mongodb.svg`,
  ];
  const rowTwo = [
    `${staticBaseUrl}logo-grphql.svg`,
    `${staticBaseUrl}logo-stencil.svg`,
    `${staticBaseUrl}logo-Linter.svg`,
    `${staticBaseUrl}logo-lit.svg`,
    `${staticBaseUrl}logo-next.svg`,
    `${staticBaseUrl}logo-less.svg`,
    `${staticBaseUrl}logo-serverless.svg`,
  ];
  const rowThree = [
    `${staticBaseUrl}logo-yarn.svg`,
    `${staticBaseUrl}logo-react.svg`,
    `${staticBaseUrl}logo-jest.svg`,
    `${staticBaseUrl}logo-typescript.svg`,
    `${staticBaseUrl}logo-angular.svg`,
    `${staticBaseUrl}logo-nodejs.svg`,
  ];
  const rowFour = [
    `${staticBaseUrl}logo-styled-components.svg`,
    `${staticBaseUrl}logo-figma.svg`,
    `${staticBaseUrl}logo-mdx.svg`,
    `${staticBaseUrl}logo-webpack.svg`,
    `${staticBaseUrl}logo-sass.svg`,
    `${staticBaseUrl}github.svg`,
  ];
  const rowFive = [
    `${staticBaseUrl}logo-contentful.svg`,
    `${staticBaseUrl}logo-zeplin.svg`,
    `${staticBaseUrl}logo-sketch.svg`,
    `${staticBaseUrl}logo-vue.svg`,
    `${staticBaseUrl}logo-eslint.svg?v=0.1`,
    `${staticBaseUrl}logo-javascript.svg`,
    `${staticBaseUrl}logo-mocha.svg`,
  ];
  return createBubbleGraph([
    ...createRow(1, 2, rowOne),
    ...createRow(2, 3, rowTwo),
    ...createRow(3, 3, rowThree),
    ...createRow(4, 2, rowFour),
    ...createRow(5, 1, rowFive),
  ]);
}

export const mockBubbleGraph = makeBubbleGraph();
