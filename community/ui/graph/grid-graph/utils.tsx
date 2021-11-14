export type PositionsType =
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'top-left';

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}
