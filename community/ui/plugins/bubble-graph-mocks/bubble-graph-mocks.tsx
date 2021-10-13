import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import type { PlainBubbleNode } from '@teambit/community.entity.graph.bubble-graph';

type Row = Array<string | number>;

const staticBaseUrl = 'https://static.bit.dev/brands/';

let pluginCounter = 0;
const getPluginID = (): string => {
  pluginCounter++;
  return `teambit.community/plugins/${pluginCounter}`;
};
const createRow = (row: number, fromCol: number, icons: Row): PlainBubbleNode[] => {
  let newRow: PlainBubbleNode[] = [];
  icons.forEach((icon) => {
    if (typeof icon === 'string') {
      const bubble: PlainBubbleNode = {
        id: getPluginID(),
        payload: {
          icon: staticBaseUrl + icon,
        },
        row,
        col: fromCol,
      };
      fromCol++;
      newRow.push(bubble);
    } else if (typeof icon === 'number') {
      fromCol = fromCol + icon;
    }
  });
  return newRow;
};

export function mockExplorePluginsGraph() {
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

export function mockCreatePluginsGraph() {
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
