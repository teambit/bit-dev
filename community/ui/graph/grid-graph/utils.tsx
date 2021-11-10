export type PositionsType = {
  top?: Record<string, string>;
  'top-right'?: Record<string, string>;
  right?: Record<string, string>;
  'bottom-right'?: Record<string, string>;
  bottom?: Record<string, string>;
  'bottom-left'?: Record<string, string>;
  left?: Record<string, string>;
  'top-left'?: Record<string, string>;
};

export const positions: PositionsType = {
  top: {
    alignSelf: 'start',
    justifySelf: 'center',
  },
  'top-right': {
    alignSelf: 'start',
    justifySelf: 'end',
  },
  right: {
    alignSelf: 'center',
    justifySelf: 'end',
  },
  'bottom-right': {
    alignSelf: 'end',
    justifySelf: 'end',
  },
  bottom: {
    alignSelf: 'end',
    justifySelf: 'center',
  },
  'bottom-left': {
    alignSelf: 'end',
    justifySelf: 'end',
  },
  left: {
    alignSelf: 'center',
    justifySelf: 'end',
  },
  'top-left': {
    alignSelf: 'start',
    justifySelf: 'end',
  },
};

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}
