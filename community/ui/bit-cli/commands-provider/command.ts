/* Parsed commands */

export type Value = string | boolean | null;

export type Arg = {
  name: string;
  description: string;
  optional: boolean;
  value: Value;
  visible: boolean;
};

export type Option = {
  name: string;
  alias: string;
  optional: boolean;
  description: string;
  args?: Arg[] | null;
  visible: boolean;
  value: Value;
};

export interface Command {
  name: string;
  alias?: string;
  args?: Arg[] | null;
  options?: Option[];
  subCommandNames: string[] | null;
  subCommands: Command[] | null;
  description: string;
}

type ArgState = {
  visible?: boolean;
  value?: string | boolean;
};

type OptionState = {
  visible?: boolean;
  args?: ArgState[];
};

export type CommandState = {
  args?: ArgState[];
  options?: OptionState[];
};

/* Raw commands */

export type RawArg = {
  name: string;
  description: string;
};

export interface RawCommand {
  name: string;
  alias?: string;
  options: Array<string[]>;
  description: string;
  extendedDescription?: string;
  group: any;
  private?: boolean;
  skipWorkspace?: boolean;
  commands?: RawCommand[];
  internal?: boolean;
  remoteOp?: boolean;
  examples?: Example[];
  arguments?: RawArg[];
}

export type Example = {
  cmd: string;
  description: string;
};
