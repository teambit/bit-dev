
/**
 * returns the scope name with or without an owner.
 */
export function getScopeName(scope: string, owner = true) {
  const split = scope.split('.');
  if (!split[1] && owner) return scope;
  return split[1];
}
