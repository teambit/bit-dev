import type { Value } from '@teambit/community.ui.bit-cli.commands-provider';

export const toArg = (value: Value, arg: string) => {
  if (value) return value;
  return arg.replace(/-/g, '_').toUpperCase();
};

export const toOption = (option: string) => {
  return `--${option}`;
};
