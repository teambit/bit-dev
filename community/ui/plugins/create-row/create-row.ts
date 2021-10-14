import type { PlainBubbleNode } from '@teambit/community.entity.graph.bubble-graph';

type Icons = Array<string | number>;

const staticBaseUrl = 'https://static.bit.dev/brands/';

let pluginCounter = 0;
const getPluginID = (): string => {
  pluginCounter++;
  return `teambit.community/plugins/${pluginCounter}`;
};

export const createRow = (row: number, col: number, icons: Icons): PlainBubbleNode[] => {
  let newRow: PlainBubbleNode[] = [];
  icons.forEach((icon) => {
    if (typeof icon === 'string') {
      const bubble: PlainBubbleNode = {
        id: getPluginID(),
        payload: {
          icon: staticBaseUrl + icon,
        },
        row,
        col,
      };
      col++;
      newRow.push(bubble);
    } else if (typeof icon === 'number') {
      col = col + icon;
    }
  });
  return newRow;
};
