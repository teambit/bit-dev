export const positions = {
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
