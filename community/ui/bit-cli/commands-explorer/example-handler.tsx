import { Command } from '@teambit/community.ui.bit-cli.commands-provider';

export type CommandExample = {
  [key: string]: string | boolean;
};

export const assignExampleValues = (
  command: Command,
  example: CommandExample
): Command => {
  const examplePropNames = Object.keys(example);
  if (command.args) {
    command.args.forEach((arg) => {
      if (examplePropNames.includes(arg.name)) {
        arg.value = example[arg.name];
      } else {
        arg.visible = false;
      }
    });

    if (command.options) {
      command.options.forEach((option) => {
        if (examplePropNames.includes(option.name)) {
          option.args![0].value = example[option.name];
        } else {
          option.visible = false;
        }
      });
    }
  }
  return command;
};
