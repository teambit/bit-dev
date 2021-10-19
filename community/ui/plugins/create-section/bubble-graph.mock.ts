import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { createRow } from '@teambit/community.ui.graph.create-row';

const staticBaseUrl = 'https://static.bit.dev/brands/';

export function mockBubbleGraph() {
  const rowOne = [`${staticBaseUrl}logo-Linter.svg`, 10, `${staticBaseUrl}logo-less.svg`];
  const rowTwo = [
    `${staticBaseUrl}logo-gatsby.svg`,
    `${staticBaseUrl}logo-mdx.svg`,
    7,
    `${staticBaseUrl}logo-react.svg`,
    `${staticBaseUrl}logo-webpack.svg`,
    `${staticBaseUrl}logo-tailwindcss.svg`,
  ];
  const rowThree = [
    `${staticBaseUrl}logo-cypress.svg`,
    `${staticBaseUrl}logo-babbel.svg`,
    8,
    `${staticBaseUrl}logo-jest.svg`,
    `${staticBaseUrl}logo-figma.svg`,
  ];
  const rowFour = [
    `${staticBaseUrl}logo-contentful.svg`,
    `${staticBaseUrl}logo-auth0.svg`,
    8,
    `${staticBaseUrl}logo-styled-components.svg`,
    `${staticBaseUrl}logo-lit.svg`,
  ];
  const rowFive = [
    `${staticBaseUrl}logo-mocha.svg`,
    8,
    `${staticBaseUrl}logo-eslint.svg?v=0.1`,
    `${staticBaseUrl}logo-yarn.svg`,
  ];
  const rowSix = [
    `${staticBaseUrl}logo-mongodb.svg`,
    `${staticBaseUrl}logo-typescript.svg`,
    6,
    `${staticBaseUrl}logo-next.svg`,
    `${staticBaseUrl}logo-sketch.svg`,
  ];
  const rowSeven = [
    `${staticBaseUrl}logo-stencil.svg`,
    `${staticBaseUrl}logo-npm.svg`,
    4,
    `${staticBaseUrl}logo-nodejs.svg`,
    `${staticBaseUrl}logo-vue.svg`,
  ];
  const rowEight = [
    `${staticBaseUrl}logo-zeplin.svg`,
    `${staticBaseUrl}logo-serverless.svg`,
    2,
    `${staticBaseUrl}github.svg`,
  ];
  const rowNine = [`${staticBaseUrl}logo-angular.svg`, `${staticBaseUrl}logo-grphql.svg`];
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
