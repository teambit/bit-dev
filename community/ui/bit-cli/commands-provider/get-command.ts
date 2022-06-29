import type { Command, RawArg, Arg, RawCommand, Option } from './command';

const optionalArgRegex = new RegExp(String.raw`([[\w|\w-]+\.*])`, 'g');
const allArgsRegex = new RegExp(String.raw`([\[<][\w|\w-]+\.*[\]>])`, 'g');
const commandRegex = new RegExp(String.raw`^(\w+[-\w+|\w+])+\b`, 'g');
const missingDesc = 'Missing description';

export const getCommand = (commands: RawCommand[], name: string): Command | null => {
  const commandName = new RegExp(`^${name}((\\s.*)|$)`, 'g');
  const command = commands.find((command) => command.name.match(commandName));
  if (!command) return null;
  const { subCommandNames, subCommands } = getSubCommands(command);
  const argsInfo = 'arguments' in command ? command.arguments : [];
  const parsedCommand = {
    name,
    alias: command.alias,
    args: getArgs(command.name, argsInfo),
    options: command.options ? getOptions(command.options) : null,
    subCommandNames,
    subCommands,
    description: command.description,
  };
  return parsedCommand as Command;
};

const getArgs = (commandStr: string, argsInfo?: RawArg[], inheritDesc?: string, isOption?: boolean): Arg[] | null => {
  const args = commandStr.match(allArgsRegex);
  if (!args && isOption)
    return [
      {
        name: 'boolean-arg',
        description: inheritDesc!,
        optional: true,
        value: null,
        visible: false,
      },
    ];
  const augmentedArgs = !args
    ? null
    : args.map((arg) => {
        const optional = optionalArgRegex.test(arg);
        const argName = arg.substring(1, arg.length - 1);
        const fallbackDesc = inheritDesc ?? missingDesc;
        const argInfo = argsInfo!.find((arg) => arg.name === argName) ?? null;
        const description = argInfo ? argInfo.description! : fallbackDesc;
        return {
          name: argName,
          description,
          optional,
          value: null,
          visible: notLegacy(description!),
        };
      });
  return augmentedArgs;
};

const getOptions = (options: RawCommand['options']): Option[] | [] => {
  const parsedOptions = !options
    ? []
    : options.map((option) => {
        const name = option[1].match(commandRegex)![0];
        const alias = option[0];
        const description = option[2] ?? missingDesc;
        const args = getArgs(option[1], [], description, true);
        return {
          name,
          alias,
          optional: true,
          description,
          args,
          visible: notLegacy(description),
          value: null,
        };
      });
  return parsedOptions;
};

const getSubCommands = (command: RawCommand) => {
  if (!command.commands) return { subCommands: null, subCommandNames: null };
  const subCommandNames = command.commands.map((command) => command.name.match(commandRegex)![0]);
  const subCommands = subCommandNames.map((subCommandName) => getCommand(command.commands!, subCommandName));
  return { subCommandNames, subCommands };
};

const notLegacy = (description: string) => {
  const legacyRegex = new RegExp(/legacy only/, 'gi');
  return !description.match(legacyRegex);
};
