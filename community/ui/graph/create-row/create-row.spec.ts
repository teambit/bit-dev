import type { PlainBubbleNode } from '@teambit/community.entity.graph.bubble-graph';
import { createRow } from './create-row';

describe('should create a row of bubbles data', () => {
  const icons = [
    'logo-auth0.svg',
    'logo-tailwindcss.svg',
    'logo-npm.svg',
    'logo-babbel.svg',
    'logo-gatsby.svg',
    'logo-cypress.svg',
    'logo-mongodb.svg',
  ];
  let mock: PlainBubbleNode[];
  beforeAll(() => {
    mock = createRow(1, 1, icons);
  });

  it(`should be ${icons.length} array length`, () => {
    expect(mock.length).toBe(icons.length);
  });

  it('all payload should have icon url', () => {
    mock.forEach((item, index) => {
      expect(item.payload?.icon).toMatch(/https:\/\/static.bit.dev\/brands\/.*?.svg/);
    });
  });
});
