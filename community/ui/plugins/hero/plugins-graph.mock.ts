import { createBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import type { PlainBubbleNode } from '@teambit/community.entity.graph.bubble-graph';

export function mockPluginsGraph() {
  let pluginCounter = 0;
  const getPluginID = (): string => {
    pluginCounter++;
    return `teambit.community/plugins/${pluginCounter}`;
  };
  const createRow = (row: number, fromCol: number, icons: string[]): PlainBubbleNode[] => {
    const newRow: PlainBubbleNode[] = icons.map((icon, index) => {
      const bubble: PlainBubbleNode = {
        id: getPluginID(),
        payload: {
          icon,
        },
        row,
        col: fromCol,
      };
      fromCol++;
      return bubble;
    });
    return newRow;
  };
  const rowOne = [
    'https://static.bit.dev/brands/logo-auth0.svg',
    'https://static.bit.dev/brands/logo-tailwindcss.svg',
    'https://static.bit.dev/brands/logo-npm.svg',
    'https://static.bit.dev/brands/logo-babbel.svg',
    'https://static.bit.dev/brands/logo-gatsby.svg',
    'https://static.bit.dev/brands/logo-cypress.svg',
    'https://static.bit.dev/brands/logo-mongodb.svg',
  ];
  const rowTwo = [
    'https://static.bit.dev/brands/logo-grphql.svg',
    'https://static.bit.dev/brands/logo-stencil.svg',
    'https://static.bit.dev/brands/logo-Linter.svg',
    'https://static.bit.dev/brands/logo-lit.svg',
    'https://static.bit.dev/brands/logo-next.svg',
    'https://static.bit.dev/brands/logo-less.svg',
    'https://static.bit.dev/brands/logo-serverless.svg',
  ];
  const rowThree = [
    'https://static.bit.dev/brands/logo-yarn.svg',
    'https://static.bit.dev/brands/logo-react.svg',
    'https://static.bit.dev/brands/logo-jest.svg',
    'https://static.bit.dev/brands/logo-typescript.svg',
    'https://static.bit.dev/brands/logo-angular.svg',
    'https://static.bit.dev/brands/logo-nodejs.svg',
  ];
  const rowFour = [
    'https://static.bit.dev/brands/logo-styled-components.svg',
    'https://static.bit.dev/brands/logo-figma.svg',
    'https://static.bit.dev/brands/logo-mdx.svg',
    'https://static.bit.dev/brands/logo-webpack.svg',
    'https://static.bit.dev/brands/logo-sass.svg',
    'https://static.bit.dev/brands/github.svg',
  ];
  const rowFive = [
    'https://static.bit.dev/brands/logo-contentful.svg',
    'https://static.bit.dev/brands/logo-zeplin.svg',
    'https://static.bit.dev/brands/logo-sketch.svg',
    'https://static.bit.dev/brands/logo-vue.svg',
    'https://static.bit.dev/brands/logo-eslint.svg?v=0.1',
    'https://static.bit.dev/brands/logo-javascript.svg',
    'https://static.bit.dev/brands/logo-mocha.svg',
  ];
  return createBubbleGraph([
    ...createRow(1, 2, rowOne),
    ...createRow(2, 3, rowTwo),
    ...createRow(3, 3, rowThree),
    ...createRow(4, 2, rowFour),
    ...createRow(5, 1, rowFive),
  ]);
}
