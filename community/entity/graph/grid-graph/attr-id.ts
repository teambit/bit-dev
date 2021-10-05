
export function getAttrValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}
